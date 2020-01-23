export interface RkMenuItem {
    id: number;
    text: string;
    icon: string;
    selected: boolean;

    subMenu?: RkMenuItem[];
}
