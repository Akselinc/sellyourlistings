import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"
import PageTitle from "../components/pageTitle"
import ServicesPricingChart from "../components/servicesPricingChart"
import Disclaimers from "../components/disclaimers"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Our Services" />
      <Header />
      <Container>
        <PageTitle>Our Services</PageTitle>
      </Container>
      <ServicesPricingChart />
      <Disclaimers />
    </Layout>
  )
}

export default ServicesPage
