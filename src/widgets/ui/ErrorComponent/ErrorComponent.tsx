import React from 'react';
import "./ErrorComponent.scss"
import { Result, Typography } from 'antd'
import {
    ErrorComponentProps,
} from '../../interfaces/ErrorComponentProps'

const { Paragraph, Text } = Typography

const ErrorComponent: React.FC<ErrorComponentProps> = ( { error } ) => {
    const messageRenderer = () => {
        if ('status' in error) {
            return 'error' in error ? error.error : JSON.stringify(error.data)
        } else {
            return error.message
        }
    }

    return (
        <Result
            status="error"
            title={'Error'}
            className='error'
        >
            <div className="desc">
                <Paragraph>
                    <Text
                        strong
                        style={{
                            fontSize: 16,
                        }}
                    >
                        {
                            messageRenderer()
                        }
                    </Text>
                </Paragraph>
            </div>
        </Result>
    )
}
export default ErrorComponent
