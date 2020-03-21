import React from 'react'
import { themeGray } from '../../theme'

interface Props {
    inputLabel: string | undefined
    placeHolderText: string
    height: number
    maximumLength?: number
    disabled?: boolean
    className?: string
    errorText?: string | undefined
    value: string
    onChangeText: (text: string) => void
    onBlur?: () => void
    inputLabelStyles?: string
    inputFieldStyles?: string

}

const NextMultiLineInput = (props: Props) => {

    const { inputLabel, className, placeHolderText, height, maximumLength, disabled, errorText, value, onChangeText, onBlur, inputLabelStyles, inputFieldStyles } = props

    return (

        <div className="ml-inputGroup">

            <style jsx>{`
            .ml-inputGroup {
                text-align: left;
                display: flex;
                flex: 1;
                flex-direction: column;
                height: auto; 
            }
            
            .ml-inputLabel {
                background: none;
                color: ${themeGray};
                width: auto;
              font-size: 11pt;
              margin-left: 10px;
              margin-bottom: 5px;
                text-align: left;
                align-items: center;
                justify-content: flex-start;
                font-weight: bold;
                height: 21px;
                ${inputLabelStyles ? inputLabelStyles : ""};
            }
            
            .ml-inputField {
                padding-left:15px;
                border:none;
               font-size: 16pt;
            padding-top: 10px;
            padding-bottom: 10px;
            height: 150px;
            font-weight: 400;
            color:${themeGray};
            ${inputFieldStyles ? inputFieldStyles : ""};
            }
            
        
            
            .ml-errorText {
                margin-top: 10px;
                margin-left: 10px;
                color: red;
                font-size: 11pt;
                display: flex;
                
            }
            
            .ml-maximumLength {
                margin-top: 8px;
                font-size: 9pt;
                text-align: right;
                margin-right: 10px;
            }
            
            @media only screen and (max-width: 600px) {
            
                .ml-inputGroup {
                    height: auto;
                }
                
                .ml-inputContainer {
                    height: 60px;
                }
                
                .ml-inputField {
                    padding:15px;
                    font-size: 11pt; 
                }
            
                .ml-errorText {
                    margin-top: 10px;
                    font-size: 11pt;
                }
            
                
            
            }
                
            `}</style>

            {inputLabel !== undefined &&
                <div className="ml-inputLabel">{inputLabel}</div>
            }



            <textarea

                onBlur={() => onBlur ? onBlur() : undefined}
                onChange={(text) => onChangeText(text.currentTarget.value)}
                value={value}
                disabled={disabled}
                className={className ? className : "ml-inputField"}
                style={{ height: height }}
                placeholder={placeHolderText}>
            </textarea>


            {maximumLength !== undefined &&
                <div className="ml-maximumLength">{maximumLength - (value ? value.length : 0)} chars remaining</div>
            }



            <div className="ml-errorText">{errorText}</div>

        </div>

    )


}

function areEqual(prevProps, nextProps) {
    return prevProps.value === nextProps.value
}

const MemoInput = React.memo(NextMultiLineInput, areEqual)

export default MemoInput