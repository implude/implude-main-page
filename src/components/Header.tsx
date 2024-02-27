import React from "react";
import { Header1, Row, Title } from "./atomic";


const Header = () => {


    return <>
        <Row style={{padding:"12px 72px"}} gap={"52px"} justify="space-between">
            <Title color="--gray-900" $bold>#IMPLUDE</Title>
            <Row gap={"52px"} align="center">
                <Header1 color="--gray-700">
                    역사
                </Header1>
                <Header1 color="--gray-700">
                    핵심가치
                </Header1>
                <Header1 color="--gray-700">
                    프로젝트
                </Header1>
                <Header1 color="--gray-700">
                    팀원 모집
                </Header1>
            </Row>
        </Row>
    </>
}


export default Header;