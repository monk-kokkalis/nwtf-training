import {useCallback, useState} from 'react';
import Style from './Wizard.module.scss';
import {
    Slide,
    Step,
    StepLabel,
    Stepper
} from '@mui/material';
// elements
import Button from 'elements/Button/Button';

function Wizard({steps, content}) {
    const [activeStep, setActiveStep] = useState(0);
    const [minHeight, setMinHeight] = useState(100);

    const slideRef = useCallback(node => {
        const nodeHeight = node?.getBoundingClientRect().height;
        if (nodeHeight > minHeight) {
            // the 20 offset is for the content section padding
            setMinHeight(nodeHeight + 20);
        }
    }, [minHeight])

    const next = () => {
        setActiveStep(activeStep + 1)
    }

    const back = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <div className={Style.Main}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <section className="content" style={{minHeight}}>
                {content.map((element, index) => (
                    <Slide
                        ref={slideRef}
                        key={index}
                        appear={index !== 0}
                        direction="left"
                        in={index === activeStep}>
                        <div style={{position: 'absolute', width: '100%', minHeight}}>
                            {element}
                        </div>
                    </Slide>
                ))}
            </section>
            <section className="navigation">
                <Button
                    clickHandler={back}
                    disabled={activeStep === 0}
                    text="Back"
                    variant="text"
                />
                <Button
                    clickHandler={next}
                    disabled={activeStep === steps.length}
                    loading={activeStep >= steps.length}
                    text={activeStep >= steps.length - 1 ? "Submit" : "Next"}
                    variant="text"
                />
            </section>
        </div>
    )
}

export default Wizard;