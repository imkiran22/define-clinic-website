const MENUS = ['home', 'gallery', 'book-appointment', 'about', 'contact-us'];

export const TREATMENTS_MENU = [
    {key: 'acne_marks', label: 'Acne Marks'}, 
    {key: 'scar_revisions', label: 'Scar Revision'},
    {key: 'pigmentation_treatment', label: 'Pigmentation Treatment'},
    {key: 'uneven_skin_tone', label: 'Uneven Skin Tone'},
    {key: 'suntan_removal_procedures', label: 'Suntan Removal Procedures'},
    {key: 'skin_lightening_treatment', label: 'Skin Lightening Treatment'}
];

export const HEADER_MENU_ITEMS: Array< {key: string, label: string } > = MENUS.map(menu => ({key: menu, label: menu.toUpperCase()}));