import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
    login: string;
    images: string;
    cart: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    login: '/login',
    images: '/imagesShop',
    cart: '/cart',
};

// interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
//     editEmployee: (id: string) => string;
// }

// export const routes: Routes = {
//     ...switchRoutes,
//     editEmployee: id => generatePath(switchRoutes.editEmployee, { id }),
// };

export const routes = {
    ...switchRoutes
}
