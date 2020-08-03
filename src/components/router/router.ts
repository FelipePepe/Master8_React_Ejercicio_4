import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/:id',
};

interface Routes extends Omit<SwitchRoutes, 'root'> {
    root: (id: string) => string;
}

export const routes: Routes = {
    ...switchRoutes,
    root: id => generatePath(switchRoutes.root, { id }),
};