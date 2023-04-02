import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader'
import useAuth from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


const HomePage = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));

export default function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<Loader />) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}







// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from '../redux/operators';

// export const App = () => {

// const dispatch = useDispatch();

// useEffect(()=>{
//   dispatch(fetchContacts())
// }, [dispatch])

//   return (
//     <section>
//       <h1>Phonebook</h1>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter />

//       <ContactList />
//     </section>
//   );
// };

//before hooks

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson'number,: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContactFormData = data => {
//     const newContact = {id: nanoid(), name: data.name, number:data.number };

//     const contacts = this.state.contacts;
//     const findDouble = contacts.find(({ name }) => {
//       return name === data.name;
//     });

//     if (findDouble) {
//       return alert(`${findDouble.name} is already in contact`);
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   deleteContactFormData = dataId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== dataId),
//     }));
//   };

//   filterContactData = e => {
//     // console.log(e);
//     this.setState({ filter: e.target.value });
//   };

//   getvisibleContacts = ()=>{
//     const {contacts, filter} = this.state

//     const toLowerCaseName = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(toLowerCaseName))

//   }

//   componentDidMount(){
//     const localSt = localStorage.getItem('contacts');
//     const parseSt = JSON.parse(localSt)

//     if (parseSt) {
//         this.setState({contacts: parseSt})
//     }

//   }

//   componentDidUpdate( _, prevState){
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }
//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getvisibleContacts()

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContactFormData} />

//         <h2>Contacts</h2>
//         <Filter onChange={this.filterContactData} value={filter} />

//         <ContactList
//           data={visibleContacts}
//           onDelete={this.deleteContactFormData}
//         />
//       </div>
//     );
//   }
// }
