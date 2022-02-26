import {useState} from 'react';
import Style from './ProgressWizard.module.scss';
import {Button, MobileStepper} from '@mui/material';
import {
    KeyboardArrowLeft as KeyboardArrowLeftIcon,
    KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';

function ProgressWizard({content, doneTemplate}) {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={Style.Main}>
            <section className="content">
                {[...content, doneTemplate].map((el, index) => (
                    <div
                        key={index}
                        style={{display: index === activeStep ? 'block' : 'none'}}>
                        {el}
                    </div>
                ))}
            </section>
            <MobileStepper
                variant="progress"
                steps={content.length + 1}
                position="static"
                activeStep={activeStep}
                sx={{maxWidth: 700, flexGrow: 1, margin: '0 auto'}}
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