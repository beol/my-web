import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNav from './components/header-nav';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import '../scss/main.scss';

const App = () => (
  <div className="page-grid-container">
    <HeaderNav />
    <Sidebar />
    <main role="main">
      <article>
        <header>
          <h1>Lorem Ipsum</h1>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis fringilla mi, quis mattis nisi facilisis vehicula. In vel tempus magna. Quisque vitae velit tellus. Fusce commodo urna sit amet lectus eleifend, sit amet pharetra tortor fermentum. Nullam fringilla turpis ipsum, ac pellentesque mi rutrum vitae. Etiam aliquet elit eu nunc mollis ullamcorper. Phasellus vehicula consequat auctor. Nunc ac erat in lorem venenatis bibendum. Morbi sed laoreet erat, ac maximus turpis. Sed lacinia purus turpis, non maximus velit mattis sed. Proin efficitur vehicula augue, sed suscipit tortor. In dolor ante, dictum in commodo et, volutpat id lectus. Suspendisse posuere elit id est venenatis efficitur. Nulla lorem nisi, dictum non enim sed, sagittis fringilla ex.
        </p>
        <p>
          Vestibulum luctus consectetur magna ac viverra. Cras rutrum, urna vitae fermentum rhoncus, purus ipsum eleifend eros, et feugiat erat dui nec leo. Mauris vulputate erat nisi, a blandit justo mollis sed. Maecenas commodo varius ligula, vestibulum dignissim magna consequat eu. Nunc accumsan bibendum hendrerit. In aliquam lorem vitae sollicitudin euismod. Aliquam vitae congue sapien, in rhoncus massa. Quisque porttitor vestibulum erat eget congue.
        </p>
        <p>  
          Aenean fringilla semper cursus. Integer sit amet interdum tortor. Nulla congue sem ac turpis mollis aliquet. Suspendisse et felis at sem consectetur tincidunt vitae ac elit. In maximus sed nisi quis aliquam. Sed velit augue, semper non turpis id, rhoncus bibendum dolor. Morbi nec malesuada dolor, in gravida nulla. Phasellus metus erat, dignissim nec urna ut, finibus consectetur nibh. Aliquam imperdiet est at augue facilisis, in porttitor purus maximus. Maecenas et tortor massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam in gravida elit. Vestibulum convallis lacinia erat, sit amet commodo felis ultrices vitae. Donec sem ipsum, venenatis eget est sit amet, imperdiet eleifend massa.
          
          <blockquote>
            Proin consectetur nisi ullamcorper consectetur pharetra. Nullam in ipsum pretium, varius mauris eget, hendrerit tellus. Fusce gravida rhoncus dolor, sit amet elementum est ornare ut. Vestibulum at commodo lectus. Suspendisse lectus ligula, rutrum id leo quis, laoreet ornare ligula. In in tristique lorem. Praesent sed tortor sit amet dolor hendrerit hendrerit. Nam aliquet leo at lectus molestie condimentum. Phasellus a arcu varius, tempus dolor nec, pulvinar ipsum. Proin molestie urna lorem, vel semper diam dictum ut. Mauris commodo commodo tincidunt. Maecenas posuere malesuada risus et gravida. Morbi nec massa eu odio sagittis feugiat. Proin elit urna, tempor et eleifend id, hendrerit nec dolor.
          </blockquote>
          
        </p>

        <p>
            Maecenas imperdiet malesuada nunc, id ornare justo. Proin dolor turpis, blandit ac posuere quis, bibendum et est. Integer dignissim sed ex tempor scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec luctus ac diam quis interdum. Aenean a eros et nulla fringilla luctus. Suspendisse ac dui ac ex varius elementum at ultrices massa.              
        </p>

        <footer>

        </footer>
      </article>
      <article>
        <header>
          <h1>Lorem Ipsum</h1>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis fringilla mi, quis mattis nisi facilisis vehicula. In vel tempus magna. Quisque vitae velit tellus. Fusce commodo urna sit amet lectus eleifend, sit amet pharetra tortor fermentum. Nullam fringilla turpis ipsum, ac pellentesque mi rutrum vitae. Etiam aliquet elit eu nunc mollis ullamcorper. Phasellus vehicula consequat auctor. Nunc ac erat in lorem venenatis bibendum. Morbi sed laoreet erat, ac maximus turpis. Sed lacinia purus turpis, non maximus velit mattis sed. Proin efficitur vehicula augue, sed suscipit tortor. In dolor ante, dictum in commodo et, volutpat id lectus. Suspendisse posuere elit id est venenatis efficitur. Nulla lorem nisi, dictum non enim sed, sagittis fringilla ex.
        </p>
        <p>
          Vestibulum luctus consectetur magna ac viverra. Cras rutrum, urna vitae fermentum rhoncus, purus ipsum eleifend eros, et feugiat erat dui nec leo. Mauris vulputate erat nisi, a blandit justo mollis sed. Maecenas commodo varius ligula, vestibulum dignissim magna consequat eu. Nunc accumsan bibendum hendrerit. In aliquam lorem vitae sollicitudin euismod. Aliquam vitae congue sapien, in rhoncus massa. Quisque porttitor vestibulum erat eget congue.
        </p>
        <p>  
          Aenean fringilla semper cursus. Integer sit amet interdum tortor. Nulla congue sem ac turpis mollis aliquet. Suspendisse et felis at sem consectetur tincidunt vitae ac elit. In maximus sed nisi quis aliquam. Sed velit augue, semper non turpis id, rhoncus bibendum dolor. Morbi nec malesuada dolor, in gravida nulla. Phasellus metus erat, dignissim nec urna ut, finibus consectetur nibh. Aliquam imperdiet est at augue facilisis, in porttitor purus maximus. Maecenas et tortor massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam in gravida elit. Vestibulum convallis lacinia erat, sit amet commodo felis ultrices vitae. Donec sem ipsum, venenatis eget est sit amet, imperdiet eleifend massa.
          
          <blockquote>
            Proin consectetur nisi ullamcorper consectetur pharetra. Nullam in ipsum pretium, varius mauris eget, hendrerit tellus. Fusce gravida rhoncus dolor, sit amet elementum est ornare ut. Vestibulum at commodo lectus. Suspendisse lectus ligula, rutrum id leo quis, laoreet ornare ligula. In in tristique lorem. Praesent sed tortor sit amet dolor hendrerit hendrerit. Nam aliquet leo at lectus molestie condimentum. Phasellus a arcu varius, tempus dolor nec, pulvinar ipsum. Proin molestie urna lorem, vel semper diam dictum ut. Mauris commodo commodo tincidunt. Maecenas posuere malesuada risus et gravida. Morbi nec massa eu odio sagittis feugiat. Proin elit urna, tempor et eleifend id, hendrerit nec dolor.
          </blockquote>
          
        </p>

        <p>
          Maecenas imperdiet malesuada nunc, id ornare justo. Proin dolor turpis, blandit ac posuere quis, bibendum et est. Integer dignissim sed ex tempor scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec luctus ac diam quis interdum. Aenean a eros et nulla fringilla luctus. Suspendisse ac dui ac ex varius elementum at ultrices massa.              
        </p>

        <footer>

        </footer>
      </article>
    </main>
    <Footer />


  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
