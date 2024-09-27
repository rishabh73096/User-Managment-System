import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList'; // Corrected import
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <Header /> 
            <Routes>
                <Route path="/" element={<UserList />} /> 
                <Route path="/create" element={<UserForm />} />
                <Route path="/edit/:id" element={<UserDetail />} />
                <Route path='/*' element={"404 page not found"}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
