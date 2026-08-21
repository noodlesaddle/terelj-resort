"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ja" | "zh";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        // Navigation
        "nav.gallery": "Gallery",
        "nav.floorPlans": "Floor Plans",
        "nav.specs": "Specs",
        "nav.investment": "Investment",
        "nav.location": "Location",
        "nav.contact": "Contact Us",

        // Hero
        "hero.title": "TERELJ RESORT",
        "hero.subtitle": "Located in Terelj National Park, Mongolia",

        // Dark Intro
        "intro.title": "Your Escape from\nScorching Summer Heat",
        "intro.subtitle": "Experience Mongolia's cool, refreshing summers while staying connected to work.\nThe perfect blend of vacation and productivity.",
        "intro.climate.title": "Summer Climate",
        "intro.climate.desc": "While cities swelter at 35-40°C, Terelj offers comfortable 20-25°C temperatures. Cool mountain air, clear blue skies, and pristine nature provide the perfect summer retreat.",
        "intro.work.title": "Work & Wellness",
        "intro.work.desc": "High-speed internet, modern workspaces, and wellness facilities let you maintain productivity while enjoying spa treatments, onsen baths, and nature walks after work.",
        "intro.footer": "5 hectares of pristine landscape • Private villas with modern amenities • Restaurant, Spa, Onsen & wellness center • 60 minutes from Ulaanbaatar",

        // Floor Plans
        "floorplan.title": "Floor Plans",
        "floorplan.hotel1": "Hotel Layout 1",
        "floorplan.hotel2": "Hotel Layout 2",
        "floorplan.service1": "Service Area 1",
        "floorplan.service2": "Service Area 2",
        "floorplan.service3": "Service Area 3",
        "floorplan.service4": "Service Area 4",
        "floorplan.clickToView": "Click to view full size",

        // Specs
        "specs.title": "SPEC",
        "specs.name": "Name",
        "specs.nameValue": "TERELJ RESORT",
        "specs.landArea": "Total Land Area",
        "specs.landAreaValue": "5 hectares",
        "specs.location": "Location",
        "specs.locationValue": "Terelj National Park, Mongolia",
        "specs.houseOptions": "Private House Options",
        "specs.bedrooms2": "2 Bedrooms",
        "specs.bedroom1": "1 Bedroom",
        "specs.studio": "Studio",
        "specs.people45": "4-5 people",
        "specs.people23": "2-3 people",
        "specs.people2": "2 people",
        "specs.facilities": "Resort Facilities",
        "specs.restaurant": "Restaurant",
        "specs.eventHall": "Event Hall",
        "specs.hotel": "Hotel",
        "specs.spa": "Spa",
        "specs.pilates": "Pilates Studio",
        "specs.onsen": "Onsen (Hot Spring)",
        "specs.wellness": "Wellness Services",

        // Why Mongolia
        "why.title": "The Opportunity",
        "why.subtitle": "Mongolia's tourism sector is experiencing unprecedented growth",
        "why.visitors": "International Visitors",
        "why.visitorsSubtitle": "in 2025, +46% YoY growth",
        "why.revenue": "Tourism Revenue",
        "why.revenueSubtitle": "Growing sector of economy",
        "why.destination": "Tourist Destination",
        "why.destinationSubtitle": "Terelj National Park",
        "why.fromCapital": "From Capital",
        "why.fromCapitalSubtitle": "Easy accessibility",
        "why.mongolia": "Why Mongolia?",
        "why.mongolia.1": "Fastest growing tourism market in Asia",
        "why.mongolia.2": "Government prioritizing tourism development",
        "why.mongolia.3": "Untapped luxury hospitality market",
        "why.mongolia.4": "Strategic location between China and Russia",
        "why.mongolia.5": "Stable political environment",
        "why.mongolia.6": "Growing middle class in neighboring countries",
        "why.terelj": "Why Terelj National Park?",
        "why.terelj.1": "Mongolia's most visited national park",
        "why.terelj.2": "Year-round destination with diverse activities",
        "why.terelj.3": "Stunning natural landscapes and rock formations",
        "why.terelj.4": "Close proximity to Ulaanbaatar (1 hour drive)",
        "why.terelj.5": "Limited luxury accommodation options",
        "why.terelj.6": "Protected natural environment ensures exclusivity",
        "why.insights": "Market Insights",
        "why.insights.growth.label": "Tourism Growth:",
        "why.insights.growth.text": "Mongolia's tourism sector has seen exceptional growth, with international arrivals reaching 846,103 in 2025, representing a 46% year-over-year increase.",
        "why.insights.luxury.label": "Luxury Gap:",
        "why.insights.luxury.text": "Despite growing demand, there is a significant shortage of high-end accommodation options outside Ulaanbaatar.",
        "why.insights.demand.label": "Regional Demand:",
        "why.insights.demand.text": "Growing affluent populations in China, South Korea, and Japan seeking unique nature-based experiences.",
        "why.insights.gov.label": "Government Support:",
        "why.insights.gov.text": "Tourism identified as key economic diversification strategy with infrastructure investments planned.",

        // Investment
        "invest.title": "Investment Opportunity",
        "invest.subtitle": "Be part of Mongolia's premier luxury resort development",
        "invest.primeLocation": "Prime Location",
        "invest.primeLocation.desc": "Located in Terelj National Park, Mongolia's premier tourist destination, just 60 minutes from the capital city.",
        "invest.growingTourism": "Growing Tourism",
        "invest.growingTourism.desc": "Mongolia's tourism sector is experiencing rapid growth with increasing international visitors year over year.",
        "invest.uniqueOffering": "Unique Offering",
        "invest.uniqueOffering.desc": "First luxury resort of its kind in the region, combining traditional hospitality with world-class amenities.",
        "invest.multipleRevenue": "Multiple Revenue Streams",
        "invest.multipleRevenue.desc": "Hotel, restaurant, spa, event hall, and wellness services provide diversified income sources.",
        "invest.development": "5 Hectare Development",
        "invest.development.desc": "Expansive property with room for future expansion and development opportunities.",
        "invest.yearRound": "Year-Round Operation",
        "invest.yearRound.desc": "Four-season destination with activities and attractions throughout the year.",
        "invest.hectares": "Hectares",
        "invest.houseOptions": "House Options",
        "invest.facilities": "Facilities",
        "invest.minFromCity": "Min from City",

        // Location
        "location.title": "ACCESS",
        "location.address": "Terelj National Park, Mongolia",
        "location.byCar": "By Car",
        "location.byCar.desc": "Approximately 60 minutes from Chinggis Khaan International Airport",
        "location.byHelicopter": "By Helicopter",
        "location.byHelicopter.desc": "Direct transfer from Chinggis Khaan Airport heliport on site",
        "location.60minutes": "60 minutes",
        "location.20minutes": "20 minutes",
        "location.googleMaps": "Open in Google Maps",

        // Gallery Page
        "gpage.title": "Gallery",
        "gpage.subtitle": "Explore the complete visual story of Terelj Resort",
        "gpage.back": "Back to Home",
        "gcat.all": "All",
        "gcat.aerial": "Aerial",
        "gcat.exterior": "Exterior",
        "gcat.interior": "Interior",
        "gcat.detail": "Detail",
        "gcat.model": "Model",
        "gpage.1": "Southwest Aerial View",
        "gpage.2": "Daytime High-Angle View",
        "gpage.3": "Dusk Illumination",
        "gpage.4": "Isometric Model",
        "gpage.5": "Site Context",
        "gpage.6": "Top-Down Plan",
        "gpage.7": "Courtyard Eye-Level",
        "gpage.8": "Sunset Pavilion",
        "gpage.9": "Evening Patio",
        "gpage.10": "Entrance Plaza",
        "gpage.11": "Arrival Loop",
        "gpage.12": "Indoor Pool Elevation",
        "gpage.13": "Glass Corridor",
        "gpage.14": "Concrete Curve",
        "gpage.15": "Rhythmic Wing",
        "gpage.16": "Interior Gallery",
        "gpage.17": "Distant Massing",
        "gpage.18": "Cross-Section",
        "gpage.19": "Corridor",

        // Contact
        "gallery.1.title": "Courtyard Sanctuary",
        "gallery.1.desc": "A curved concrete wall frames the grassy courtyard,\nleading to a single-story pavilion and the main\nresidential building beyond.",
        "gallery.2.title": "Golden Hour Pavilion",
        "gallery.2.desc": "A long timber and glass pavilion nestled into the grassy slope,\nbathed in the warm glow of late afternoon sun.",
        "gallery.3.title": "Forest Pool",
        "gallery.3.desc": "A glass-walled building houses a blue-lit lap pool,\nreflecting the interior timber structure against\na backdrop of dense forest.",
        "gallery.4.title": "Light-Filled Gallery",
        "gallery.4.desc": "Sun-drenched hallway with light wood floors\nand floor-to-ceiling glass walls opening\nto a forested courtyard.",
        "gallery.5.title": "Evening Terrace",
        "gallery.5.desc": "An outdoor wooden deck with cafe seating at night,\nframed by building wings with warm light\nspilling from glass doors.",
        "gallery.6.title": "Seamless Connection",
        "gallery.6.desc": "A minimalist glass-walled corridor connects\nthe white residential building to the wooden wing,\noverlooking a lush lawn.",
        "gallery.7.title": "Dusk Illumination",
        "gallery.7.desc": "As evening falls, warm interior lights glow through windows\nwhile integrated landscape lighting\nilluminates the central courtyard.",
        "gallery.8.title": "Architectural Harmony",
        "gallery.8.desc": "The U-shaped complex reveals its four-story white building\nwith balconies overlooking a central green courtyard\nwith young trees.",

        // Contact
        "contact.title": "Ready to Invest in\nMongolia's Future?",
        "contact.subtitle": "Join us in creating an exceptional destination that combines luxury, nature, and sustainable growth.",
        "contact.requestDeck": "Request Investment Deck",
        "contact.scheduleCall": "Schedule a Call",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
    },
    ja: {
        // Navigation
        "nav.gallery": "ギャラリー",
        "nav.floorPlans": "間取り図",
        "nav.specs": "仕様",
        "nav.investment": "投資案内",
        "nav.location": "アクセス",
        "nav.contact": "お問い合わせ",

        // Hero
        "hero.title": "テレルジリゾート",
        "hero.subtitle": "モンゴル・テレルジ国立公園",

        // Dark Intro
        "intro.title": "猛暑からの\n避暑地",
        "intro.subtitle": "モンゴルの涼しく爽やかな夏を体験しながら、仕事とのつながりを保つ。\n休暇と生産性の完璧な融合。",
        "intro.climate.title": "夏の気候",
        "intro.climate.desc": "都市が35-40°Cの猛暑に見舞われる中、テレルジは快適な20-25°Cの気温を提供します。涼しい山の空気、澄んだ青空、そして手つかずの自然が完璧な避暑地を提供します。",
        "intro.work.title": "仕事とウェルネス",
        "intro.work.desc": "高速インターネット、モダンなワークスペース、ウェルネス施設により、スパトリートメント、温泉、自然散策を楽しみながら生産性を維持できます。",
        "intro.footer": "5ヘクタールの自然景観 • モダンな設備を備えたプライベートヴィラ • レストラン、スパ、温泉＆ウェルネスセンター • ウランバートルから60分",

        // Floor Plans
        "floorplan.title": "間取り図",
        "floorplan.hotel1": "ホテル配置図 1",
        "floorplan.hotel2": "ホテル配置図 2",
        "floorplan.service1": "サービスエリア 1",
        "floorplan.service2": "サービスエリア 2",
        "floorplan.service3": "サービスエリア 3",
        "floorplan.service4": "サービスエリア 4",
        "floorplan.clickToView": "クリックして拡大表示",

        // Specs
        "specs.title": "仕様",
        "specs.name": "名称",
        "specs.nameValue": "テレルジリゾート",
        "specs.landArea": "総敷地面積",
        "specs.landAreaValue": "5ヘクタール",
        "specs.location": "所在地",
        "specs.locationValue": "モンゴル・テレルジ国立公園",
        "specs.houseOptions": "プライベートハウスオプション",
        "specs.bedrooms2": "2ベッドルーム",
        "specs.bedroom1": "1ベッドルーム",
        "specs.studio": "スタジオ",
        "specs.people45": "4〜5名",
        "specs.people23": "2〜3名",
        "specs.people2": "2名",
        "specs.facilities": "リゾート施設",
        "specs.restaurant": "レストラン",
        "specs.eventHall": "イベントホール",
        "specs.hotel": "ホテル",
        "specs.spa": "スパ",
        "specs.pilates": "ピラティススタジオ",
        "specs.onsen": "温泉",
        "specs.wellness": "ウェルネスサービス",

        // Why Mongolia
        "why.title": "投資機会",
        "why.subtitle": "モンゴルの観光セクターは前例のない成長を遂げています",
        "why.visitors": "外国人観光客数",
        "why.visitorsSubtitle": "2025年、前年比+46%成長",
        "why.revenue": "観光収入",
        "why.revenueSubtitle": "成長する経済セクター",
        "why.destination": "観光地ランキング",
        "why.destinationSubtitle": "テレルジ国立公園",
        "why.fromCapital": "首都からのアクセス",
        "why.fromCapitalSubtitle": "アクセス良好",
        "why.mongolia": "なぜモンゴル？",
        "why.mongolia.1": "アジアで最も急成長している観光市場",
        "why.mongolia.2": "政府が観光開発を優先",
        "why.mongolia.3": "未開拓のラグジュアリーホスピタリティ市場",
        "why.mongolia.4": "中国とロシアの間の戦略的立地",
        "why.mongolia.5": "安定した政治環境",
        "why.mongolia.6": "近隣諸国の富裕層の増加",
        "why.terelj": "なぜテレルジ国立公園？",
        "why.terelj.1": "モンゴルで最も訪問者の多い国立公園",
        "why.terelj.2": "多様なアクティビティを楽しめる通年型観光地",
        "why.terelj.3": "壮大な自然景観と岩石地形",
        "why.terelj.4": "ウランバートルから近距離（車で1時間）",
        "why.terelj.5": "高級宿泊施設の不足",
        "why.terelj.6": "保護された自然環境による希少性",
        "why.insights": "市場インサイト",
        "why.insights.growth.label": "観光成長：",
        "why.insights.growth.text": "モンゴルの観光セクターは著しい成長を遂げており、2025年の外国人観光客数は846,103人に達し、前年比46%増を記録しました。",
        "why.insights.luxury.label": "ラグジュアリー不足：",
        "why.insights.luxury.text": "需要の高まりにもかかわらず、ウランバートル以外での高級宿泊施設は著しく不足しています。",
        "why.insights.demand.label": "地域需要：",
        "why.insights.demand.text": "中国、韓国、日本の富裕層が自然体験型の独自の旅行を求めています。",
        "why.insights.gov.label": "政府支援：",
        "why.insights.gov.text": "観光業は経済多様化の重要戦略として位置づけられ、インフラ投資が計画されています。",

        // Investment
        "invest.title": "投資機会",
        "invest.subtitle": "モンゴル最高級リゾート開発の一員になりませんか",
        "invest.primeLocation": "最高の立地",
        "invest.primeLocation.desc": "モンゴル最高の観光地、テレルジ国立公園に位置し、首都から車で60分のアクセス。",
        "invest.growingTourism": "成長する観光業",
        "invest.growingTourism.desc": "モンゴルの観光セクターは急速な成長を遂げており、外国人観光客数は年々増加しています。",
        "invest.uniqueOffering": "唯一無二の提供価値",
        "invest.uniqueOffering.desc": "この地域初の高級リゾートとして、伝統的なホスピタリティと世界水準の設備を融合。",
        "invest.multipleRevenue": "複数の収益源",
        "invest.multipleRevenue.desc": "ホテル、レストラン、スパ、イベントホール、ウェルネスサービスによる多角的な収益構造。",
        "invest.development": "5ヘクタール開発",
        "invest.development.desc": "将来の拡張・開発の余地を持つ広大な敷地。",
        "invest.yearRound": "通年営業",
        "invest.yearRound.desc": "四季を通じたアクティビティと観光資源を持つ通年型観光地。",
        "invest.hectares": "ヘクタール",
        "invest.houseOptions": "住宅オプション",
        "invest.facilities": "施設数",
        "invest.minFromCity": "分（市内から）",

        // Location
        "location.title": "アクセス",
        "location.address": "モンゴル・テレルジ国立公園",
        "location.byCar": "車で",
        "location.byCar.desc": "チンギスハーン国際空港から約60分",
        "location.byHelicopter": "ヘリコプターで",
        "location.byHelicopter.desc": "チンギスハーン空港ヘリポートから直接送迎",
        "location.60minutes": "60分",
        "location.20minutes": "20分",
        "location.googleMaps": "Google マップで見る",

        // Gallery Page
        "gpage.title": "ギャラリー",
        "gpage.subtitle": "テレルジリゾートの完全なビジュアルストーリーをご覧ください",
        "gpage.back": "ホームに戻る",
        "gcat.all": "すべて",
        "gcat.aerial": "航空写真",
        "gcat.exterior": "外観",
        "gcat.interior": "内観",
        "gcat.detail": "詳細",
        "gcat.model": "模型",
        "gpage.1": "南西からの航空写真",
        "gpage.2": "昼間の俯瞰図",
        "gpage.3": "黄昏の輝き",
        "gpage.4": "アイソメトリックモデル",
        "gpage.5": "敷地コンテキスト",
        "gpage.6": "真上からの平面図",
        "gpage.7": "中庭のアイレベル",
        "gpage.8": "夕暮れのパビリオン",
        "gpage.9": "夜のパティオ",
        "gpage.10": "エントランスプラザ",
        "gpage.11": "アライバルループ",
        "gpage.12": "屋内プール",
        "gpage.13": "ガラスの廊下",
        "gpage.14": "コンクリートカーブ",
        "gpage.15": "リズミカルな翼棟",
        "gpage.16": "光溢れるギャラリー",
        "gpage.17": "遠景マッシング",
        "gpage.18": "断面図",
        "gpage.19": "コリドー",

        // Contact
        "gallery.1.title": "中庭の聖域",
        "gallery.1.desc": "曲線を描くコンクリートの壁が芝生の中庭を縁取り、\n単層のパビリオンと奥の\nメイン居住棟へと続く。",
        "gallery.2.title": "黄金の時間のパビリオン",
        "gallery.2.desc": "芝生の斜面に佇む木材とガラスのパビリオン、\n午後の陽光に包まれて。",
        "gallery.3.title": "森のプール",
        "gallery.3.desc": "ガラス張りの建物に青く輝くラッププール、\n木材の内部構造が\n深い森を背景に映し出される。",
        "gallery.4.title": "光溢れるギャラリー",
        "gallery.4.desc": "明るい木の床と天井まで届くガラス壁の廊下、\n森の中庭へと開かれた\n陽光あふれる空間。",
        "gallery.5.title": "夜のテラス",
        "gallery.5.desc": "夜のカフェ席を備えた木製デッキ、\nガラス扉から温かな光が溢れ出す\n建物の翼に囲まれた空間。",
        "gallery.6.title": "シームレスな繋がり",
        "gallery.6.desc": "白い居住棟と木造の翼棟を繋ぐ\nミニマルなガラス張りの廊下、\n緑豊かな芝生を見渡す。",
        "gallery.7.title": "黄昏の輝き",
        "gallery.7.desc": "夕暮れ時、窓から温かな室内の光が輝き、\n統合された景観照明が\n中央の中庭を照らし出す。",
        "gallery.8.title": "建築の調和",
        "gallery.8.desc": "U字型の複合施設、若木が植えられた\n緑の中庭を見下ろす\nバルコニーを持つ4階建ての白い建物。",

        // Contact
        "contact.title": "モンゴルの未来への\n投資準備はできていますか？",
        "contact.subtitle": "ラグジュアリー、自然、持続可能な成長を組み合わせた特別な目的地の創造にご参加ください。",
        "contact.requestDeck": "投資資料請求",
        "contact.scheduleCall": "電話予約",
        "contact.email": "メール",
        "contact.phone": "電話",
        "contact.location": "所在地",
    },
    zh: {
        // Navigation
        "nav.gallery": "图库",
        "nav.floorPlans": "平面图",
        "nav.specs": "规格",
        "nav.investment": "投资信息",
        "nav.location": "交通",
        "nav.contact": "联系我们",

        // Hero
        "hero.title": "特勒勒吉度假村",
        "hero.subtitle": "蒙古国特勒勒吉国家公园",

        // Dark Intro
        "intro.title": "逃离\n酷暑",
        "intro.subtitle": "在蒙古国凉爽宜人的夏日，保持工作与生活的平衡。\n度假与高效工作的完美融合。",
        "intro.climate.title": "夏季气候",
        "intro.climate.desc": "当城市酷热难耐（35-40°C）时，特勒勒吉提供舒适的20-25°C气温。凉爽的山地空气、湛蓝的天空和原始自然构成完美的避暑胜地。",
        "intro.work.title": "工作与健康",
        "intro.work.desc": "高速网络、现代化工作空间和健康设施，让您在享受水疗、温泉浴和自然散步的同时保持高效工作。",
        "intro.footer": "5公顷原始景观 • 配备现代设施的私人别墅 • 餐厅、水疗、温泉及健康中心 • 距乌兰巴托60分钟",

        // Floor Plans
        "floorplan.title": "平面图",
        "floorplan.hotel1": "酒店布局 1",
        "floorplan.hotel2": "酒店布局 2",
        "floorplan.service1": "服务区域 1",
        "floorplan.service2": "服务区域 2",
        "floorplan.service3": "服务区域 3",
        "floorplan.service4": "服务区域 4",
        "floorplan.clickToView": "点击查看大图",

        // Specs
        "specs.title": "项目规格",
        "specs.name": "名称",
        "specs.nameValue": "特勒勒吉度假村",
        "specs.landArea": "总占地面积",
        "specs.landAreaValue": "5公顷",
        "specs.location": "位置",
        "specs.locationValue": "蒙古国特勒勒吉国家公园",
        "specs.houseOptions": "私人住宅方案",
        "specs.bedrooms2": "两居室",
        "specs.bedroom1": "一居室",
        "specs.studio": "开间",
        "specs.people45": "4-5人",
        "specs.people23": "2-3人",
        "specs.people2": "2人",
        "specs.facilities": "度假村设施",
        "specs.restaurant": "餐厅",
        "specs.eventHall": "活动大厅",
        "specs.hotel": "酒店",
        "specs.spa": "水疗",
        "specs.pilates": "普拉提工作室",
        "specs.onsen": "温泉",
        "specs.wellness": "健康服务",

        // Why Mongolia
        "why.title": "投资机遇",
        "why.subtitle": "蒙古国旅游业正经历前所未有的增长",
        "why.visitors": "境外游客人数",
        "why.visitorsSubtitle": "2025年，同比增长46%",
        "why.revenue": "旅游收入",
        "why.revenueSubtitle": "快速增长的经济板块",
        "why.destination": "旅游目的地",
        "why.destinationSubtitle": "特勒勒吉国家公园",
        "why.fromCapital": "距首都距离",
        "why.fromCapitalSubtitle": "交通便利",
        "why.mongolia": "为什么选择蒙古国？",
        "why.mongolia.1": "亚洲增长最快的旅游市场",
        "why.mongolia.2": "政府将旅游业列为发展优先",
        "why.mongolia.3": "尚未开发的高端酒店市场",
        "why.mongolia.4": "中俄之间的战略地理位置",
        "why.mongolia.5": "稳定的政治环境",
        "why.mongolia.6": "周边国家中产阶层持续壮大",
        "why.terelj": "为什么选择特勒勒吉国家公园？",
        "why.terelj.1": "蒙古国访客最多的国家公园",
        "why.terelj.2": "四季皆宜的多元化旅游目的地",
        "why.terelj.3": "壮美的自然风光与岩石地貌",
        "why.terelj.4": "距乌兰巴托仅1小时车程",
        "why.terelj.5": "高端住宿设施严重匮乏",
        "why.terelj.6": "自然保护区赋予项目稀缺性",
        "why.insights": "市场洞察",
        "why.insights.growth.label": "旅游增长：",
        "why.insights.growth.text": "蒙古国旅游业实现强劲增长，2025年境外游客人数达846,103人，同比增长46%。",
        "why.insights.luxury.label": "高端市场缺口：",
        "why.insights.luxury.text": "尽管需求持续增长，乌兰巴托以外的高端住宿仍严重不足。",
        "why.insights.demand.label": "区域需求：",
        "why.insights.demand.text": "中国、韩国、日本的富裕人群正寻求独特的自然体验式旅行。",
        "why.insights.gov.label": "政府支持：",
        "why.insights.gov.text": "旅游业被确立为经济多元化的核心战略，基础设施投资计划已在推进中。",

        // Investment
        "invest.title": "投资机会",
        "invest.subtitle": "共同参与蒙古国顶级豪华度假村的开发建设",
        "invest.primeLocation": "黄金地段",
        "invest.primeLocation.desc": "坐落于蒙古国顶级旅游胜地特勒勒吉国家公园，距首都仅60分钟车程。",
        "invest.growingTourism": "旅游业强势增长",
        "invest.growingTourism.desc": "蒙古国旅游业快速扩张，境外游客数量逐年攀升。",
        "invest.uniqueOffering": "独一无二的项目",
        "invest.uniqueOffering.desc": "该地区首个高端度假村，将传统待客之道与世界级设施完美融合。",
        "invest.multipleRevenue": "多元化收益来源",
        "invest.multipleRevenue.desc": "酒店、餐厅、水疗、活动大厅及健康服务构成多元化收益体系。",
        "invest.development": "5公顷开发项目",
        "invest.development.desc": "广阔用地为未来扩展与开发预留充裕空间。",
        "invest.yearRound": "全年运营",
        "invest.yearRound.desc": "四季皆有活动与旅游资源，实现全年稳定运营。",
        "invest.hectares": "公顷",
        "invest.houseOptions": "住宅方案",
        "invest.facilities": "配套设施",
        "invest.minFromCity": "分钟（距市区）",

        // Location
        "location.title": "交通",
        "location.address": "蒙古国特勒勒吉国家公园",
        "location.byCar": "自驾",
        "location.byCar.desc": "距成吉思汗国际机场约60分钟车程",
        "location.byHelicopter": "直升机",
        "location.byHelicopter.desc": "从成吉思汗机场直升机停机坪直接接送",
        "location.60minutes": "60分钟",
        "location.20minutes": "20分钟",
        "location.googleMaps": "在谷歌地图中打开",

        // Gallery Page
        "gpage.title": "图库",
        "gpage.subtitle": "探索特勒勒吉度假村的完整视觉故事",
        "gpage.back": "返回首页",
        "gcat.all": "全部",
        "gcat.aerial": "航拍",
        "gcat.exterior": "外观",
        "gcat.interior": "内部",
        "gcat.detail": "细节",
        "gcat.model": "模型",
        "gpage.1": "西南航拍视角",
        "gpage.2": "日间俯瞰图",
        "gpage.3": "黄昏夜景",
        "gpage.4": "等轴测模型",
        "gpage.5": "场地环境",
        "gpage.6": "俯视平面图",
        "gpage.7": "庭院人视角",
        "gpage.8": "日落凉亭",
        "gpage.9": "夜间露台",
        "gpage.10": "入口广场",
        "gpage.11": "到达环路",
        "gpage.12": "室内泳池",
        "gpage.13": "玻璃廊道",
        "gpage.14": "混凝土曲线",
        "gpage.15": "韵律翼楼",
        "gpage.16": "室内画廊",
        "gpage.17": "远景体量",
        "gpage.18": "剖面图",
        "gpage.19": "走廊",

        // Gallery cards
        "gallery.1.title": "庭院圣所",
        "gallery.1.desc": "弧形混凝土墙围合草坪庭院，\n引向单层凉亭与\n远处的主楼。",
        "gallery.2.title": "黄金时刻凉亭",
        "gallery.2.desc": "木材与玻璃构成的长廊\n依山而建，沐浴在午后温暖的阳光中。",
        "gallery.3.title": "林中泳池",
        "gallery.3.desc": "玻璃幕墙建筑内藏蓝光泳道，\n木结构倒映在\n茂密森林背景之上。",
        "gallery.4.title": "光影长廊",
        "gallery.4.desc": "阳光充沛的走廊铺设浅木地板，\n落地玻璃墙向\n林间庭院开敞。",
        "gallery.5.title": "夜间露台",
        "gallery.5.desc": "夜晚的木质露台咖啡座，\n建筑两翼温暖的灯光\n从玻璃门中溢出。",
        "gallery.6.title": "无缝连接",
        "gallery.6.desc": "极简玻璃廊道连接\n白色居住楼与木质翼楼，\n俯瞰翠绿草坪。",
        "gallery.7.title": "黄昏夜景",
        "gallery.7.desc": "夜幕降临，温暖的室内灯光\n透过窗户投射而出，\n景观灯照亮中央庭院。",
        "gallery.8.title": "建筑和谐",
        "gallery.8.desc": "U形综合体揭示四层白色大楼，\n阳台俯瞰种有小树的\n绿色中央庭院。",

        // Contact
        "contact.title": "准备好投资\n蒙古国的未来了吗？",
        "contact.subtitle": "共同打造融合奢华、自然与可持续发展的卓越目的地。",
        "contact.requestDeck": "索取投资材料",
        "contact.scheduleCall": "预约通话",
        "contact.email": "邮箱",
        "contact.phone": "电话",
        "contact.location": "地址",
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Language;
        if (stored === "en" || stored === "ja" || stored === "zh") {
            setLanguageState(stored);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        localStorage.setItem("lang", lang);
        setLanguageState(lang);
    };

    const t = (key: string): string => {
        const langDict = translations[language] as Record<string, string>;
        return langDict[key] ?? (translations.en as Record<string, string>)[key] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
