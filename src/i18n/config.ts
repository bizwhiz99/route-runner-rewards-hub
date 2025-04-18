
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
      routeAdherence: "Route Adherence"
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
      routeAdherence: "Соблюдение маршрута"
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
      routeAdherence: "Дотримання маршруту"
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
