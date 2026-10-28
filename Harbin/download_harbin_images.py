import urllib.request
import urllib.parse
import json
import os
import sys
import time

DEST_DIR = r"d:\01_DOCKER\cakephp2\www\Travel\Harbin\assets\places"
os.makedirs(DEST_DIR, exist_ok=True)

# Custom User-Agent with contact info per Wikimedia policy
HEADERS = {
    'User-Agent': 'TravelPlannerBot/1.0 (https://example.com/bot; contact@example.com) Python-urllib/3.7'
}

TARGETS = [
    {
        "id": "harbin_00_station",
        "name": "Harbin Railway Station",
        "wiki_titles": ["Harbin_railway_station"],
        "commons_queries": ["Harbin railway station south facade"]
    },
    {
        "id": "harbin_01_saint_sophia",
        "name": "Saint Sophia Cathedral Harbin",
        "wiki_titles": ["Saint_Sophia_Cathedral,_Harbin"],
        "commons_queries": ["Saint Sophia Cathedral Harbin"]
    },
    {
        "id": "harbin_02_zhongyang_street",
        "name": "Zhongyang Pedestrian Street",
        "wiki_titles": ["Central_Street_(Harbin)"],
        "commons_queries": ["Central Street Harbin cobblestone"]
    },
    {
        "id": "harbin_03_volga_manor",
        "name": "Volga Manor",
        "wiki_titles": ["Volga_Manor"],
        "commons_queries": ["Volga Manor Harbin"]
    },
    {
        "id": "harbin_04_siberian_tiger_park",
        "name": "Siberian Tiger Park",
        "wiki_titles": ["Siberian_Tiger_Park"],
        "commons_queries": ["Siberian Tiger Park Harbin"]
    },
    {
        "id": "harbin_05_sun_island",
        "name": "Sun Island Scenic Area",
        "wiki_titles": ["Sun_Island_(Harbin)"],
        "commons_queries": ["Sun Island Harbin snow sculpture", "Taiyangdao snow"]
    },
    {
        "id": "harbin_06_binzhou_bridge",
        "name": "Binzhou Railway Bridge",
        "wiki_titles": ["Binzhou_Railway_Bridge"],
        "commons_queries": ["Binzhou Railway Bridge Harbin", "Songhua River bridge Harbin"]
    },
    {
        "id": "harbin_07_songhua_river_carnival",
        "name": "Songhua River Ice Carnival",
        "wiki_titles": ["Songhua_River"],
        "commons_queries": ["Frozen Songhua River Harbin ice", "Harbin ice carnival"]
    },
    {
        "id": "harbin_08_chinese_baroque",
        "name": "Chinese Baroque Lao Daowai",
        "wiki_titles": ["Daowai_District"],
        "commons_queries": ["Chinese Baroque Harbin", "Daowai Harbin architecture"]
    },
    {
        "id": "harbin_09_harbin_opera_house",
        "name": "Harbin Grand Theatre",
        "wiki_titles": ["Harbin_Grand_Theatre"],
        "commons_queries": ["Harbin Grand Theatre MAD", "Harbin Opera House"]
    },
    {
        "id": "harbin_10_flood_control_monument",
        "name": "Flood Control Monument Stalin Park",
        "wiki_titles": ["Harbin_Flood_Control_Memorial_Tower"],
        "commons_queries": ["Harbin Flood Control Monument", "Stalin Park Harbin"]
    },
    {
        "id": "harbin_11_airport",
        "name": "Harbin Taiping Airport T2",
        "wiki_titles": ["Harbin_Taiping_International_Airport"],
        "commons_queries": ["Harbin Taiping International Airport terminal"]
    },
    {
        "id": "harbin_12_ice_and_snow_world",
        "name": "Harbin Ice and Snow World",
        "wiki_titles": ["Harbin_International_Ice_and_Snow_Sculpture_Festival"],
        "commons_queries": ["Harbin Ice and Snow World castle", "Harbin ice festival"]
    },
    {
        "id": "harbin_13_gogol_street",
        "name": "Gogol Street & Alekseyev Church",
        "wiki_titles": ["Church_of_the_Intercession_in_Harbin"],
        "commons_queries": ["Church of the Intercession Harbin", "Alekseyev Church Harbin"]
    },
    {
        "id": "harbin_14_songhua_ropeway",
        "name": "Songhua River Ropeway",
        "wiki_titles": ["Songhua_River"],
        "commons_queries": ["Songhua River cable car Harbin", "Songhua ropeway Harbin"]
    },
    {
        "id": "harbin_15_hongzhuan_market",
        "name": "Hongzhuan Morning Market",
        "wiki_titles": ["Street_food"],
        "commons_queries": ["Harbin street food", "Chinese morning market winter steam"]
    },
    {
        "id": "harbin_16_provincial_museum",
        "name": "Heilongjiang Provincial Museum",
        "wiki_titles": ["Heilongjiang_Provincial_Museum"],
        "commons_queries": ["Heilongjiang Provincial Museum Harbin"]
    },
    {
        "id": "harbin_17_dragon_tower",
        "name": "Dragon Tower (Long Ta)",
        "wiki_titles": ["Dragon_Tower"],
        "commons_queries": ["Dragon Tower Harbin", "Long Ta Harbin tower"]
    },
    {
        "id": "harbin_18_beer_museum",
        "name": "Harbin Beer Museum",
        "wiki_titles": ["Harbin_Brewery"],
        "commons_queries": ["Harbin Brewery", "Harbin Beer"]
    },
    {
        "id": "harbin_19_music_park",
        "name": "Harbin Music Park & Jewish Synagogue",
        "wiki_titles": ["New_Synagogue_(Harbin)", "Main_Synagogue_(Harbin)"],
        "commons_queries": ["Harbin Jewish New Synagogue", "Harbin music park snowman"]
    }
]

def fetch_wiki_image(title):
    time.sleep(1.2)
    try:
        url = "https://en.wikipedia.org/w/api.php?action=query&titles=" + urllib.parse.quote(title) + "&prop=pageimages&format=json&pithumbsize=1000"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            for p in pages.values():
                thumb = p.get("thumbnail", {}).get("source")
                if thumb:
                    return thumb
    except Exception as e:
        print("  Wiki error:", type(e).__name__)
    return None

def fetch_commons_image(query):
    time.sleep(1.2)
    try:
        url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=" + urllib.parse.quote(query) + "&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=1000&format=json&gsrlimit=5"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            for p in pages.values():
                infos = p.get("imageinfo", [])
                if infos:
                    info = infos[0]
                    mime = info.get("mime", "")
                    if "image" in mime:
                        thumb = info.get("thumburl") or info.get("url")
                        if thumb:
                            return thumb
    except Exception as e:
        print("  Commons error:", type(e).__name__)
    return None

def download_file(url, target_path):
    time.sleep(0.8)
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        content = resp.read()
        if len(content) > 5000:
            with open(target_path, "wb") as f:
                f.write(content)
            return True
    return False

results = {}

for t in TARGETS:
    target_id = t["id"]
    target_file = os.path.join(DEST_DIR, target_id + ".jpg")
    
    # Check if already downloaded
    if os.path.exists(target_file) and os.path.getsize(target_file) > 10000:
        print("[ALREADY EXISTS] " + target_id + " (" + str(os.path.getsize(target_file)) + " bytes)")
        results[target_id] = "assets/places/" + target_id + ".jpg"
        continue
        
    print("[DOWNLOADING] " + target_id + "...")
    img_url = None
    
    for wt in t.get("wiki_titles", []):
        img_url = fetch_wiki_image(wt)
        if img_url:
            break
            
    if not img_url:
        for cq in t.get("commons_queries", []):
            img_url = fetch_commons_image(cq)
            if img_url:
                break
                
    if img_url:
        try:
            if download_file(img_url, target_file):
                size = os.path.getsize(target_file)
                print("  Success: " + str(size) + " bytes")
                results[target_id] = "assets/places/" + target_id + ".jpg"
                continue
        except Exception as e:
            print("  Download error:", type(e).__name__)
            
    print("  Failed to download for " + target_id)

print("\nDownloaded successfully:", len(results), "/", len(TARGETS))
