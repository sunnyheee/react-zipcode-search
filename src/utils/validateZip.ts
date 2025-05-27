export function validateZip(zip: string): string | null {
  if (!zip) return '郵便番号を入力してください。';
  if (!/^[0-9\-]+$/.test(zip))
    return '郵便番号は半角数字のみまたは半角数字とハイフンのみで入力してください。';
  if (!/^(\d{7}|\d{3}-\d{4})$/.test(zip))
    return '郵便番号は半角数字でハイフンありの8桁かハイフンなしの7桁で入力してください。';
  return null;
}
