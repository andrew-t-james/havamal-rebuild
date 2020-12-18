import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'
import BandGallery from '../components/BandGallery'

const SagaPage = () => (
  <>
    <SEO title="Saga" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Hymn-Weavers
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p>Andreas Herlogsson - Drums</p>
        <p></p>
      </div>
      <BandGallery />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Havamal Saga
      </h1>
      <div className="lg:px-24 text-center">
        <p className="font-grenze text-xl text-white">
          Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020.
        </p>
        <p className="font-grenze text-xl text-white">
          Havamal's crushing sound is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
        </p>
        <p className="font-grenze text-xl text-white">
          Signed by Art Gates Records in 2019, the first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. Hopefully we will soon see Havamal set sail on their longships and spread the raids across the globe.
        </p>
        <p className="font-grenze text-xl text-white">
          Allied once more with Art Gates Records, the hymn-weavers are returning to the studio to record their second full-length album. Look for this epic new album to be released in 2021!
        </p>
      </div>
      <div className="lg:px-24 text-center">
        <h2 className="font-grenze text-4xl py-4 text-blue-lighter">
          Hail Havamal!
        </h2>
      </div>
    </Layout>
  </>
)

export default SagaPage