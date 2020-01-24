export interface RkMenuItem {
    id: number;
    text: string;
    icon: string;
    selected: boolean;
    path : string;

    subMenu?: RkMenuItem[];
}
