import {useRef, useState} from 'react';
import Style from './ProgressWizard.module.scss';
import {Button, MobileStepper} from '@mui/material';
import {
    KeyboardArrowLeft as KeyboardArrowLeftIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';
// hooks
import useContentHeight from './hooks/use-content-height';

function ProgressWizard({content, doneTemplate}) {
    const [activeStep, setActiveStep] = useState(10);
    const stepperHeight = 50;
    const verticalPadding = 15;
    const mainRef = useRef();
    const contentHeight = useContentHeight({mainRef, stepperHeight, verticalPadding});

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={Style.Main} ref={mainRef}>
            <section
                className="content"
                style={{
                    maxHeight: `${contentHeight}px`,
                    padding: `${verticalPadding}px 25px`
                }}>
                {activeStep === content.length ? doneTemplate : content[activeStep]}
            </section>
            <MobileStepper
                variant="progress"
                steps={content.length + 1}
                position="static"
                activeStep={activeStep}
                sx={{maxWidth: 700, flexGrow: 1, margin: '0 auto', height: `${stepperHeight}px`}}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === content.length}
                        variant={activeStep < content.length - 1 ? "text" : "contained"}>
                        {activeStep < content.length - 1 ? <KeyboardArrowRightIcon /> : null}
                        <span>{activeStep >= content.length - 1 ? "Submit" : "Next"}</span>
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeftIcon />
                        <span>Back</span>
                    </Button>
                }
            />
        </div>
    );
}

export default ProgressWizard;