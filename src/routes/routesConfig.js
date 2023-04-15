
import PeoplePageContainer from '@containers/PeoplePage/PeoplePageContainer';
import HomePage from '@containers/HomePage';
import PersonPageContainer from '@containers/PersonPage/PersonPageContainer';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';
import ErrorMessage from '@components/ErrorMessage';
import SearchPage from '@containers/SearchPage';

const routesConfig = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/people",
        element: <PeoplePageContainer />,
    },
    {
        path: "/people/:id",
        element: <PersonPageContainer />,
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: "/favorites",
        element: <FavoritesPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
    {
        path: "/not-found",
        element: <NotFoundPage />,
    },
    {
        path: "/error",
        element: <ErrorMessage />,
    },
    {
        path: "/fail",
        element: <ErrorMessage />,
    },
    ];

    export default routesConfig;

