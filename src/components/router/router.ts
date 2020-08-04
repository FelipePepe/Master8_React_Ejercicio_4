import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
    cats: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    cats: '/:id',
};

interface Routes extends Omit<SwitchRoutes, 'cats'> {
    cats: (id: string) => string;
}

export const routes: Routes = {
    ...switchRoutes,
    cats: id => generatePath(switchRoutes.cats, { id }),
};