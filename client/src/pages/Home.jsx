import React from 'react'
import { Link } from "react-router-dom"
import Helmet from "../components/Helmet"
import GoongSlider from "../components/GoongSlider"
import goongSliderData from '../assets/fake-data/goong-slider'
import Grid from '../components/Grid'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from "../components/PolicyCard"

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import ProductCard from "../components/ProductCard"
import banner from "../assets/images/banner.png"
const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* slider */}
            <GoongSlider data={goongSliderData} control={true} auto={true} timeOut={5000} />
            {/* end slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {policy.map((item, index) => (
                            <Link to="/policy" key={index}>
                                <PolicyCard

                                    name={item.name}
                                    icon={item.icon}
                                    description={item.description}

                                />
                            </Link>
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling product */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
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
            {/* end best selling product */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
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
            {/* end of arrival */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>

            {/* end banner */}
            {/* popular */}
            <Section>
                <SectionTitle>
                    Nổi bật
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
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
            {/* end popular */}
        </Helmet >
    )
}

export default Home