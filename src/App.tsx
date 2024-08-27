import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Authenticated, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import {
  ErrorComponent,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from '@refinedev/mui';
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { TOptionsBase } from 'i18next';
import { $Dictionary } from 'i18next/typescript/helpers';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppIcon from '~/components/Icons/AppIcon';
import routes from '~/config/route';
import { Header } from '~/layouts/Header';
import { Login } from '~/pages/Login';
import Organizations from '~/pages/Organizations';
import ProductPermissions from '~/pages/ProductPermissions';
import UserManagement from '~/pages/UserManagement';
import { ThemeProvider, authProvider, dataProvider } from '~/providers';

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (
      key: string,
      params: (TOptionsBase & $Dictionary) | undefined
    ) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider()}
              authProvider={authProvider}
              routerProvider={routerBindings}
              i18nProvider={i18nProvider}
              resources={routes}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: 'EhoZCN-XwVZel-RHKvwk',
                title: { text: 'FRMP Admin', icon: <AppIcon size={24} /> },
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key='authenticated-inner'
                      fallback={<CatchAllNavigate to='/login' />}
                    >
                      <ThemedLayoutV2 Header={Header}>
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource='users' />}
                  />
                  <Route path='/users'>
                    <Route index element={<UserManagement />} />
                  </Route>
                  <Route path='/organizations'>
                    <Route index element={<Organizations />} />
                  </Route>
                  <Route path='/product-permissions'>
                    <Route index element={<ProductPermissions />} />
                  </Route>
                  <Route path='*' element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key='authenticated-outer'
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path='/login' element={<Login />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
