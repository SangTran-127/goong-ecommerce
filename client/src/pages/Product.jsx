import React, { useEffect } from 'react'
import productData from '../assets/fake-data/products'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Helmet from "../components/Helmet"
import Grid from "../components/Grid"
import ProductCard from '../components/ProductCard'
import { useParams } from "react-router-dom";
const Product = (props) => {

    const params = useParams()

    const product = productData.getProductBySlug(params.slug)
    console.log(product);

    const relatedProduct = productData.getProducts(4);

    return (
        <Helmet title={product.title}>
            <Section>
                {/* <SectionTitle>{params.slug}</SectionTitle> */}
                <SectionBody>{product.title}</SectionBody>
            </Section>
            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProduct.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product