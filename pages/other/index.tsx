import React from 'react'
import Head from 'next/head'

const Index = (props) => (
  <React.Fragment>
    <Head key={5}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="For the team to write tags in here" />
      <meta name="author" content="Grammer Hub" />
      <title>Grammerhub | WE REALLY DO THIS BOILERPLATE THING</title>
    </Head>

    <div className="gradient-bg" style={{minHeight: '100vh'}}>
      <div className="wrapper">
        <main>
          <div id="coming-soon">
              <h1>THIS IS THAT OTHER</h1>
          </div>
        </main>
      </div>
    </div>
  </React.Fragment>
)

export default Index