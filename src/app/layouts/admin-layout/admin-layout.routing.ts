import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RestaurentListComponent } from '../../restaurent-list/restaurent-list.component';
import { RestaurentAddComponent } from '../../restaurent-add/restaurent-add.component';
import { ItemsListComponent } from '../../items-list/items-list.component';
import { ItemsAddComponent } from '../../items-add/items-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'restaurent/list', component: RestaurentListComponent },
    { path: 'restaurent/add', component: RestaurentAddComponent },
    { path: 'items/list', component: ItemsListComponent },
    {path: 'items/add', component:ItemsAddComponent}
];
