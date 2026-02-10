"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ja";

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

        // Floor Plans
        "floorplan.title": "Floor Plans",
        "floorplan.hotel1": "Hotel Layout 1",
        "floorplan.hotel2": "Hotel Layout 2",
        "floorplan.service1": "Service Area 1",
        "floorplan.service2": "Service Area 2",
        "floorplan.service3": "Service Area 3",
        "floorplan.service4": "Service Area 4",

        // Specs
        "specs.title": "SPEC",
        "specs.name": "Name",
        "specs.nameValue": "TERELJ RESORT",
        "specs.landArea": "Total Land Area",
        "specs.landAreaValue": "5 hectares",
        "specs.location": "Location",
        "specs.locationValue": "Terelj National Park, Mongolia",
        "specs.houseOptions": "Private House Options",
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
        "why.terelj": "Why Terelj National Park?",
        "why.insights": "Market Insights",

        // Investment
        "invest.title": "Investment Opportunity",
        "invest.subtitle": "Be part of Mongolia's premier luxury resort development",
        "invest.primeLocation": "Prime Location",
        "invest.growingTourism": "Growing Tourism",
        "invest.uniqueOffering": "Unique Offering",
        "invest.multipleRevenue": "Multiple Revenue Streams",
        "invest.development": "5 Hectare Development",
        "invest.yearRound": "Year-Round Operation",

        // Location
        "location.title": "ACCESS",
        "location.byCar": "By Car",
        "location.byHelicopter": "By Helicopter",
        "location.minutes": "minutes",

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

        // Floor Plans
        "floorplan.title": "間取り図",
        "floorplan.hotel1": "ホテル配置図 1",
        "floorplan.hotel2": "ホテル配置図 2",
        "floorplan.service1": "サービスエリア 1",
        "floorplan.service2": "サービスエリア 2",
        "floorplan.service3": "サービスエリア 3",
        "floorplan.service4": "サービスエリア 4",

        // Specs
        "specs.title": "仕様",
        "specs.name": "名称",
        "specs.nameValue": "テレルジリゾート",
        "specs.landArea": "総敷地面積",
        "specs.landAreaValue": "5ヘクタール",
        "specs.location": "所在地",
        "specs.locationValue": "モンゴル・テレルジ国立公園",
        "specs.houseOptions": "プライベートハウスオプション",
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
        "why.visitors": "外国人観光客",
        "why.visitorsSubtitle": "2025年、前年比+46%成長",
        "why.revenue": "観光収入",
        "why.revenueSubtitle": "成長する経済セクター",
        "why.destination": "観光地",
        "why.destinationSubtitle": "テレルジ国立公園",
        "why.fromCapital": "首都から",
        "why.fromCapitalSubtitle": "アクセス良好",
        "why.mongolia": "なぜモンゴル？",
        "why.terelj": "なぜテレルジ国立公園？",
        "why.insights": "市場インサイト",

        // Investment
        "invest.title": "投資機会",
        "invest.subtitle": "モンゴル最高級リゾート開発の一員になりませんか",
        "invest.primeLocation": "最高の立地",
        "invest.growingTourism": "成長する観光業",
        "invest.uniqueOffering": "ユニークな提供",
        "invest.multipleRevenue": "複数の収益源",
        "invest.development": "5ヘクタール開発",
        "invest.yearRound": "通年営業",

        // Location
        "location.title": "アクセス",
        "location.byCar": "車で",
        "location.byHelicopter": "ヘリコプターで",
        "location.minutes": "分",

        // Contact
        "contact.title": "モンゴルの未来への\n投資準備はできていますか？",
        "contact.subtitle": "ラグジュアリー、自然、持続可能な成長を組み合わせた特別な目的地の創造にご参加ください。",
        "contact.requestDeck": "投資資料請求",
        "contact.scheduleCall": "電話予約",
        "contact.email": "メール",
        "contact.phone": "電話",
        "contact.location": "所在地",
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
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
