
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Dashboard sections
      leaderboard: "Driver Leaderboard & Rewards",
      tabs: {
        leaderboard: "Leaderboard",
        rewards: "Rewards Program",
        redeem: "Redeem Points",
        spend: "Card Spend",
        manager: "Manager View"
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
      // Manager view
      driverDistribution: "Driver Distribution",
      spendAnalysis: "Spend Analysis",
      teamPerformance: "Team Performance"
    }
  },
  ru: {
    translation: {
      leaderboard: "Рейтинг водителей и награды",
      tabs: {
        leaderboard: "Рейтинг",
        rewards: "Программа наград",
        redeem: "Обменять баллы",
        spend: "Расходы по карте",
        manager: "Панель менеджера"
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
      driverDistribution: "Распределение водителей",
      spendAnalysis: "Анализ расходов",
      teamPerformance: "Эффективность команды"
    }
  },
  uk: {
    translation: {
      leaderboard: "Рейтинг водіїв та нагороди",
      tabs: {
        leaderboard: "Рейтинг",
        rewards: "Програма винагород",
        redeem: "Обміняти бали",
        spend: "Витрати по картці",
        manager: "Панель менеджера"
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
      driverDistribution: "Розподіл водіїв",
      spendAnalysis: "Аналіз витрат",
      teamPerformance: "Ефективність команди"
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
