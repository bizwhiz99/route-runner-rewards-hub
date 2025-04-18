import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      navigation: {
        dashboard: "Dashboard",
        performance: "Performance",
        progress: "Progress",
        leaderboard: "Leaderboard",
        team: "Team",
        settings: "Settings",
        logout: "Logout"
      },
      // Dashboard sections
      appName: "RouteRunner",
      dashboardTitle: "Driver Performance Dashboard",
      leaderboard: "Driver Leaderboard & Rewards",
      tabs: {
        leaderboard: "Leaderboard",
        rewards: "Rewards Program",
        redeem: "Redeem Points",
        spend: "Card Spend",
        manager: "Manager View"
      },
      // Charts and metrics
      metrics: {
        mileageTracking: "Mileage Tracking",
        distance: "Daily and weekly distance driven",
        performanceMetrics: "Performance Metrics",
        safetyScores: "Safety scores and fuel efficiency",
        weekly: "Weekly",
        monthly: "Monthly",
        miles: "Miles",
        safetyScore: "Safety Score",
        fuelEfficiency: "Fuel Efficiency (mpg)",
        weeklyMileage: "Weekly Mileage",
        overallRank: "Overall Rank",
        milesLabel: "miles",
        placesUp: "places up"
      },
      // Driver actions
      driverActions: "Driver Actions (Weekly Update)",
      weekOf: "Week of",
      points: "pts",
      deadline: "Deadline",
      difficulty: {
        easy: "easy",
        medium: "medium",
        hard: "hard"
      },
      // Rewards
      availablePoints: "Available Points",
      monthlyPoints: "Monthly Points",
      redeemedPoints: "Points Redeemed",
      tierStatus: "Driver Tier Status",
      untilNextTier: "points until {{tier}} Tier",
      categories: "Categories",
      marketplace: "Rewards Marketplace",
      pointsBalance: "Your Points Balance",
      redeemButton: "Redeem",
      // Filters
      filters: {
        label: "Filters:",
        region: "Region",
        team: "Team",
        period: "Period",
        groupBy: "Group by:",
        sortBy: "Sort by",
        allTeams: "All Teams",
        allRegions: "All Regions",
        allTiers: "All Tiers"
      },
      // Common
      rank: "Rank",
      driver: "Driver",
      team: "Team",
      region: "Region",
      tier: "Tier",
      points: "Points",
      onTime: "On-Time %",
      routeAdherence: "Route Adherence",
      // Manager view
      managerView: {
        title: "Fleet Manager View",
        driverDistribution: "Driver Distribution",
        spendAnalysis: "Fuel vs Non-Fuel Spend by Tier",
        teamPerformance: "Team Performance",
        totalDrivers: "Total drivers in {{region}}",
        avgSpend: "Average monthly spend per driver shown in dollars",
        avgPoints: "Average monthly points earned and redeemed per driver by team"
      },
      // Fuel card
      fuelCard: {
        title: "Fuel Card Spend",
        region: "Region", 
        driverTier: "Driver Tier",
        avgFuelSpend: "Average Fuel Spend",
        nonFuelTransactions: "Non-Fuel Transactions",
        fromLastMonth: "from last month"
      }
    }
  },
  es: {
    translation: {
      navigation: {
        dashboard: "Panel de Control",
        performance: "Rendimiento",
        progress: "Progreso",
        leaderboard: "Clasificación",
        team: "Equipo",
        settings: "Ajustes",
        logout: "Cerrar Sesión"
      },
      appName: "RouteRunner",
      dashboardTitle: "Panel de Rendimiento del Conductor",
      leaderboard: "Clasificación de Conductores y Recompensas",
      tabs: {
        leaderboard: "Clasificación",
        rewards: "Programa de Recompensas",
        redeem: "Canjear Puntos",
        spend: "Gastos de Tarjeta",
        manager: "Vista de Gerente"
      },
      metrics: {
        mileageTracking: "Seguimiento de Kilometraje",
        distance: "Distancia diaria y semanal recorrida",
        performanceMetrics: "Métricas de Rendimiento",
        safetyScores: "Puntuaciones de seguridad y eficiencia de combustible",
        weekly: "Semanal",
        monthly: "Mensual",
        miles: "Millas",
        safetyScore: "Puntuación de Seguridad",
        fuelEfficiency: "Eficiencia de Combustible (mpg)",
        weeklyMileage: "Kilometraje Semanal",
        overallRank: "Clasificación General",
        milesLabel: "millas",
        placesUp: "puestos arriba"
      },
      filters: {
        label: "Filtros:",
        region: "Región",
        team: "Equipo",
        period: "Período",
        groupBy: "Agrupar por:",
        sortBy: "Ordenar por",
        allTeams: "Todos los Equipos",
        allRegions: "Todas las Regiones",
        allTiers: "Todos los Niveles"
      },
      fuelCard: {
        title: "Gasto de Tarjeta de Combustible",
        region: "Región",
        driverTier: "Nivel del Conductor",
        avgFuelSpend: "Gasto Promedio en Combustible",
        nonFuelTransactions: "Transacciones No Combustible",
        fromLastMonth: "desde el mes pasado"
      },
      managerView: {
        title: "Vista del Gerente de Flota",
        driverDistribution: "Distribución de Conductores",
        spendAnalysis: "Análisis de Gastos",
        teamPerformance: "Rendimiento del Equipo",
        totalDrivers: "Total de conductores en {{region}}",
        avgSpend: "Gasto mensual promedio por conductor",
        avgPoints: "Promedio de puntos mensuales"
      }
    }
  },
  hi: {
    translation: {
      navigation: {
        dashboard: "डैशबोर्ड",
        performance: "प्रदर्शन",
        progress: "प्रगति",
        leaderboard: "लीडरबोर्ड",
        team: "टीम",
        settings: "सेटिंग्स",
        logout: "लॉग आउट"
      },
      appName: "राउटरनर",
      dashboardTitle: "ड्राइवर प्रदर्शन डैशबोर्ड",
      leaderboard: "ड्राइवर लीडरबोर्ड और पुरस्कार",
      tabs: {
        leaderboard: "लीडरबोर्ड",
        rewards: "पुरस्कार कार्यक्रम",
        redeem: "पॉइंट्स रिडीम करें",
        spend: "कार्ड खर्च",
        manager: "प्रबंधक दृश्य"
      },
      metrics: {
        mileageTracking: "माइलेज ट्रैकिंग",
        distance: "दैनिक और साप्ताहिक दूरी",
        performanceMetrics: "प्रदर्शन मैट्रिक्स",
        safetyScores: "सुरक्षा स्कोर और ईंधन दक्षता",
        weekly: "साप्ताहिक",
        monthly: "मासिक",
        miles: "मील",
        safetyScore: "सुरक्षा स्कोर",
        fuelEfficiency: "ईंधन दक्षता (एमपीजी)",
        weeklyMileage: "साप्ताहिक माइलेज",
        overallRank: "समग्र रैंक",
        milesLabel: "मील",
        placesUp: "स्थान ऊपर"
      },
      filters: {
        label: "फ़िल्टर:",
        region: "क्षेत्र",
        team: "टीम",
        period: "अवधि",
        groupBy: "समूह द्वारा:",
        sortBy: "क्रमबद्ध करें",
        allTeams: "सभी टीमें",
        allRegions: "सभी क्षेत्र",
        allTiers: "सभी स्तर"
      },
      fuelCard: {
        title: "ईंधन कार्ड खर्च",
        region: "क्षेत्र",
        driverTier: "ड्राइवर स्तर",
        avgFuelSpend: "औसत ईंधन खर्च",
        nonFuelTransactions: "गैर-ईंधन लेनदेन",
        fromLastMonth: "पिछले महीने से"
      },
      managerView: {
        title: "फ्लीट प्रबंधक दृश्य",
        driverDistribution: "ड्राइवर वितरण",
        spendAnalysis: "खर्च विश्लेषण",
        teamPerformance: "टीम प्रदर्शन",
        totalDrivers: "{{region}} में कुल ड्राइवर",
        avgSpend: "प्रति ड्राइवर औसत मासिक खर्च",
        avgPoints: "औसत मासिक अंक"
      }
    }
  },
  ru: {
    translation: {
      navigation: {
        dashboard: "Панель управления",
        performance: "Производительность",
        progress: "Прогресс",
        leaderboard: "Рейтинг",
        team: "Команда",
        settings: "Настройки",
        logout: "Выход"
      },
      appName: "RouteRunner",
      dashboardTitle: "Панель показателей водителя",
      leaderboard: "Рейтинг водителей и награды",
      tabs: {
        leaderboard: "Рейтинг",
        rewards: "Программа наград",
        redeem: "Обменять баллы",
        spend: "Расходы по карте",
        manager: "Панель менеджера"
      },
      metrics: {
        mileageTracking: "Учет пробега",
        distance: "Ежедневный и еженедельный пробег",
        performanceMetrics: "Показатели эффективности",
        safetyScores: "Оценки безопасности и расход топлива",
        weekly: "Еженедельно",
        monthly: "Ежемесячно",
        miles: "Мили",
        safetyScore: "Оценка безопасности",
        fuelEfficiency: "Расход топлива (миль/галлон)",
        weeklyMileage: "Еженедельный пробег",
        overallRank: "Общий рейтинг",
        milesLabel: "миль",
        placesUp: "позиций вверх"
      },
      driverActions: "Действия водителя (еженедельное обновление)",
      weekOf: "Неделя",
      points: "баллов",
      deadline: "Срок",
      difficulty: {
        easy: "легко",
        medium: "средне",
        hard: "сложно"
      },
      availablePoints: "Доступные баллы",
      monthlyPoints: "Баллы за месяц",
      redeemedPoints: "Использованные баллы",
      tierStatus: "Статус уровня водителя",
      untilNextTier: "баллов до уровня {{tier}}",
      categories: "Категории",
      marketplace: "Маркетплейс наград",
      pointsBalance: "Баланс баллов",
      redeemButton: "Обменять",
      filters: {
        label: "Фильтры:",
        region: "Регион",
        team: "Команда",
        period: "Период",
        groupBy: "Группировать по:",
        sortBy: "Сортировать по",
        allTeams: "Все команды",
        allRegions: "Все регионы",
        allTiers: "Все уровни"
      },
      rank: "Ранг",
      driver: "Водитель",
      team: "Команда",
      region: "Регион",
      tier: "Уровень",
      points: "Баллы",
      onTime: "Вовремя %",
      routeAdherence: "Соблюдение маршрута",
      managerView: {
        title: "Панель менеджера автопарка",
        driverDistribution: "Распределение водителей",
        spendAnalysis: "Расходы на топливо и другие расходы по уровням",
        teamPerformance: "Эффективность команды",
        totalDrivers: "Всего водителей в {{region}}",
        avgSpend: "Средние ежемесячные расходы на водителя в долларах",
        avgPoints: "Среднее количество заработанных и использованных баллов по командам"
      },
      fuelCard: {
        title: "Расходы по топливной карте",
        region: "Регион",
        driverTier: "Уровень водителя",
        avgFuelSpend: "Средний расход на топливо",
        nonFuelTransactions: "Нетопливные транзакции",
        fromLastMonth: "от прошлого месяца"
      }
    }
  },
  uk: {
    translation: {
      navigation: {
        dashboard: "Панель керування",
        performance: "Продуктивність",
        progress: "Прогрес",
        leaderboard: "Рейтинг",
        team: "Команда",
        settings: "Налаштування",
        logout: "Вихід"
      },
      appName: "RouteRunner",
      dashboardTitle: "Панель показників водія",
      leaderboard: "Рейтинг водіїв та нагороди",
      tabs: {
        leaderboard: "Рейтинг",
        rewards: "Програма винагород",
        redeem: "Обміняти бали",
        spend: "Витрати по картці",
        manager: "Панель менеджера"
      },
      metrics: {
        mileageTracking: "Облік пробігу",
        distance: "Щоденний та щотижневий пробіг",
        performanceMetrics: "Показники ефективності",
        safetyScores: "Оцінки безпеки та витрата пального",
        weekly: "Щотижнево",
        monthly: "Щомісячно",
        miles: "Милі",
        safetyScore: "Оцінка безпеки",
        fuelEfficiency: "Витрата пального (миль/галон)",
        weeklyMileage: "Щотижневий пробіг",
        overallRank: "Загальний рейтинг",
        milesLabel: "миль",
        placesUp: "позицій вгору"
      },
      driverActions: "Дії водія (щотижневе оновлення)",
      weekOf: "Тиждень",
      points: "балів",
      deadline: "Термін",
      difficulty: {
        easy: "легко",
        medium: "середньо",
        hard: "складно"
      },
      availablePoints: "Доступні бали",
      monthlyPoints: "Бали за місяць",
      redeemedPoints: "Використані бали",
      tierStatus: "Статус рівня водія",
      untilNextTier: "балів до рівня {{tier}}",
      categories: "Категорії",
      marketplace: "Маркетплейс винагород",
      pointsBalance: "Баланс балів",
      redeemButton: "Обміняти",
      filters: {
        label: "Фільтри:",
        region: "Регіон",
        team: "Команда",
        period: "Період",
        groupBy: "Групувати за:",
        sortBy: "Сортувати за",
        allTeams: "Усі команди",
        allRegions: "Усі регіони",
        allTiers: "Усі рівні"
      },
      rank: "Ранг",
      driver: "Водій",
      team: "Команда",
      region: "Регіон",
      tier: "Рівень",
      points: "Бали",
      onTime: "Вчасно %",
      routeAdherence: "Дотримання маршруту",
      managerView: {
        title: "Панель менеджера автопарку",
        driverDistribution: "Розподіл водіїв",
        spendAnalysis: "Витрати на пальне та інші витрати за рівнями",
        teamPerformance: "Ефективність команди",
        totalDrivers: "Всього водіїв у {{region}}",
        avgSpend: "Середні щомісячні витрати на водія в доларах",
        avgPoints: "Середня кількість зароблених та використаних балів по командах"
      },
      fuelCard: {
        title: "Витрати по паливній картці",
        region: "Регіон",
        driverTier: "Рівень водія",
        avgFuelSpend: "Середні витрати на пальне",
        nonFuelTransactions: "Непаливні транзакції",
        fromLastMonth: "від минулого місяця"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
