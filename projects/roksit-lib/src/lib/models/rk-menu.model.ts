export interface RkMenuItem {
    /**
     * @description Menu Item Id
     */
    id: number;

    /**
     * @description Menu item view text
     */
    text: string;

    /**
     * @description Menu item view icon (feather icons and custom icons)
     */
    icon: string;

    /**
     * @description Menu item has selected for UI
     */
    selected: boolean;

    /**
     * @description Menu item router path for angular router
     */
    path?: string;

    /**
     * @description Menu item's roles for angular router AuthGuards
     */
    roles?: string[];

    /**
     * @description Menu item sub items
     */
    subMenu?: RkMenuItem[];
}
