const MENUS = ['home', 'gallery', 'book appointment', 'about', 'contact us'];

export const TREATMENTS_MENU = [{key: 'acne_marks', label: 'Acne Marks'}, {key: 'scar_revisions', label: 'Scar Revision'}];

export const HEADER_MENU_ITEMS: Array< {key: string, label: string } > = MENUS.map(menu => ({key: menu, label: menu.toUpperCase()}));