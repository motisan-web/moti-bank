/**
 * Theme / Labels configuration
 * All display names are defined here for future theme switching
 */
const THEME = {
  // App
  app_name: 'ゆうき銀行',
  currency: '円',
  currency_symbol: '¥',

  // Navigation tabs (bottom nav)
  nav_home: 'ホーム',
  nav_stats: '統計',
  nav_tools: 'ツール',
  nav_wallet: 'ウォレット',
  nav_account: 'アカウント',

  // Home screen
  home_main_balance_label: 'メイン残高',
  home_points_label: 'もちポイント',
  home_coins_label: 'ガチャコイン',
  home_nisa_label: 'NISA',
  home_recent_title: '最近の取引',
  home_pending_title: '承認待ち',
  home_view_all: 'すべて見る',

  // Actions
  action_charge: 'チャージ',
  action_withdraw: '引き出し',
  action_payment: '建て替え',
  action_transfer: '振替',

  // Transaction
  tx_status_draft: '下書き',
  tx_status_pending: '承認待ち',
  tx_status_approved: '承認済み',
  tx_status_rejected: '差し戻し',
  tx_status_cancelled: 'キャンセル',
  tx_status_direct: '直接反映',

  // Categories
  cat_charge: 'チャージ',
  cat_withdraw: '引き出し',
  cat_payment: '建て替え',
  cat_grant: '付与',
  cat_use: '使用',
  cat_compensation: '補填',
  cat_adjustment: '調整',

  // Roles
  role_main: 'メインユーザー',
  role_admin: '管理ユーザー',

  // Users (display names - would come from API in real app)
  user_main_name: 'ゆうき',
  user_admin_name: 'もち',

  // Misc
  no_data: 'データがありません',
  loading: '読み込み中...',
};

/**
 * Format currency amount
 */
function formatAmount(amount, showSign = false) {
  const formatted = Math.abs(amount).toLocaleString();
  if (showSign) {
    const sign = amount >= 0 ? '+' : '-';
    return `${sign}${THEME.currency_symbol}${formatted}`;
  }
  return `${THEME.currency_symbol}${formatted}`;
}

/**
 * Apply theme labels to elements with data-label attribute
 */
function applyTheme() {
  document.querySelectorAll('[data-label]').forEach(el => {
    const key = el.getAttribute('data-label');
    if (THEME[key]) {
      el.textContent = THEME[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', applyTheme);
