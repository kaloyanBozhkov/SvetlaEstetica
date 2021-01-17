import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/core'
import Link from 'next/link'

const Footer = ({
    linksConfig = [],
    findUsLink = { url: '', text: '' },
    brandName = '',
    brandAddress = '',
}) => {
    return (
        <Flex>
            <Flex>
                <Text>{brandName}</Text>
                <Text>{brandAddress}</Text>
                <Link as={Text} href={findUsLink.url}>
                    {findUsLink.text}
                </Link>
            </Flex>
            <Flex>
                <Text>Supporto</Text>
                {linksConfig.map(({ url, text }, key) => (
                    <Link data-test-id="link" key={key} as={Text} href={url}>
                        {text}
                    </Link>
                ))}
            </Flex>
        </Flex>
    )
}

Footer.propTypes = {
    linksConfig: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    findUsLink: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string,
    }),
    brandName: PropTypes.string,
    brandAddress: PropTypes.string,
}

export default Footer
