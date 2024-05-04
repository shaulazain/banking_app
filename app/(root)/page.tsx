import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : 'Nozaib' , lastName : "Asif"  , email: "contact@Nozaib.pro"}
  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transaction efficently"
           />

           <TotalBalanceBox
           accounts= {[]}
           totalBanks= {1}
           totalCurrentBalance={1250.35}
           />
          </header>

         RECENT TRANSACTIONS
        </div>
    
         <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 1250.35 }, {currentBalance: 250.35 }]}
         />
    </section>
  )
}

export default Home