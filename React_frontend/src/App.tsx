import { useContext, lazy, Suspense } from 'react';
import { ThemeContext } from './context/theme.context';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CustomProgress from './components/Spinner/CustomProgress';
// Imports for lazy loading
const Home = lazy(() => import('./pages/home/Home'));
const Companies = lazy(() => import('./pages/companies/Companies'));
const AddCompany = lazy(() => import('./pages/companies/AddCompany'));
const Jobs = lazy(() => import('./pages/jobs/Jobs'));
const AddJob = lazy(() => import('./pages/jobs/AddJob'));
const Candidates = lazy(() => import('./pages/candidates/Candidates'));
const AddCandidate = lazy(() => import('./pages/candidates/AddCandidate'));

const App = () => {
    const { darkMode } = useContext(ThemeContext);

    const appStyles = darkMode ? 'app dark' : 'app';

    return (
        <div className={appStyles}>
            <Navbar />
            <div className='wrapper'>
                <Suspense fallback={<CustomProgress />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/companies'>
                            <Route index element={<Companies />} />
                            <Route path='add' element={<AddCompany />} />
                        </Route>
                        <Route path='/jobs'>
                            <Route index element={<Jobs />} />
                            <Route path='add' element={<AddJob />} />
                        </Route>
                        <Route path='/candidates'>
                            <Route index element={<Candidates />} />
                            <Route path='add' element={<AddCandidate />} />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
