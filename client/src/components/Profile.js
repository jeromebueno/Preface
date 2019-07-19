import React, {useContext,useEffect} from 'react';
import styles from 'styled-components'
import AdviceContext from '../context/AdviceContext';
import AdviceList from '../components/Advice/AdviceList';
import BookProvider from '../context/BookProvider';
import BookList from '../components/Book/BookList'
import BookContext from '../context/BookContext';

const userImg = require("../img/user_large.png");
const Container = styles.div`
   margin-top: 72px
`

export default function Profile() {
    const context = useContext(AdviceContext);
    const bookContext = useContext(BookContext)
    const userData = JSON.parse(window.sessionStorage.getItem('user'));
  
    useEffect(() => { // ComponentDidMount
      context.loadUserAdvice();
      bookContext.loadFavorite(userData.like);
    }, []);

    return (
        <Container className="column col-sm-12 col-9 col-mx-auto">
            <div className="columns">
                <div className="column col-md-12 col-8 mb-2">
                    <div className="card" style={{padding: 24}}>
                        <div className="card-body">
                            <img className="float-left" style={{marginRight: 32}} width="84px" src={userImg}/>
                            <div>
                                <h2>
                                    {userData.firstname} {userData.lastname}
                                </h2>
                                <p>   {userData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column col-md-6 col-2">
                    <div className="card" style={{padding: '16px 24px'}}>
                        <div className="card-body">
                            <div>
                                <p>Avis</p>
                                <h1>{context.userAdvice == undefined ? 0 : context.userAdvice.length}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column col-md-6 col-2">
                    <div className="card" style={{padding: '16px 24px'}}>
                        <div className="card-body">
                            <div>
                                <p>Favoris</p>
                                <h1>{userData.like.length}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 32}}>
                <div style={{marginTop: 40}} className="divider"/>
                <h2 style={{marginTop: 40}}>Mes avis</h2>
                <AdviceList advices={context.userAdvice}/>
            </div>


            <div style={{marginTop: 32}}>
                <div style={{marginTop: 40}} className="divider"/>
                <h2 style={{marginTop: 40}}>Mes favoris</h2>
                <BookList miniature={true} books={bookContext.favorites}/>
            </div>
        </Container>
    );
}