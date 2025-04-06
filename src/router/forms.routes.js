import { List } from '@/views/forms';

export default {
    path: '/forms',
    component: List,
    children: [
        { path: '', component: List },
    ]
};
