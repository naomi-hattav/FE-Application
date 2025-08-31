export interface User{
  id: number;
  name: string;
  userName: string;
  email: string;
  phone:number;
}
// אופרטור	מתי נשתמש בו?
// switchMap	כשיש תלות בין Observables ורוצים לבטל את הקודם אם בא חדש
// mergeMap	כשצריך להריץ את כולם במקביל (למשל: העלאת קבצים)
// concatMap	כשצריך סדר – כל בקשה תרוץ רק אחרי שהקודמת הסתיימה
// exhaustMap	מתעלם מקריאות חדשות אם יש קריאה פעילה