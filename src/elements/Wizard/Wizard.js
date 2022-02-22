import {useState} from 'react';
import Style from './Wizard.module.scss';
import {
    Slide,
    Step,
    StepLabel,
    Stepper
} from '@mui/material';
// elements
import Button from 'elements/Button/Button';

function Wizard({steps, content, minHeight}) {
    const [activeStep, setActiveStep] = useState(1);

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
                        key={index}
                        appear={index !== 0}
                        direction="left"
                        in={index === activeStep}
                        mountOnEnter
                        unmountOnExit>
                        <div style={{position: 'absolute', width: '100%'}}>
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
                    text={activeStep >= steps.length - 1 ? "Submit" : "Next"}
                    variant="text"
                />
            </section>
        </div>
    )
}

export default Wizard;