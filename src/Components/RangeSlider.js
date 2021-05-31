import React,{useState} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import '../styles/RangeSlider.css'

const useStyles = makeStyles({
        root: {
          color:'#F59F58',
          height: '10px',
          width:'100%',
          marginTop:'10px'
        },
        // thumb: {
        //   height: 24,
        //   width: 24,
        //   border: '2px solid currentColor',
        //   marginTop: -8,
        //   marginLeft: -12,
        //   '&:focus, &:hover, &$active': {
        //     boxShadow: 'inherit',
        //   },
        // },
        // active: {},
        // valueLabel: {
        //   left: 'calc(-50% + 4px)',
        // },
        track: {
          height: '10px !important',
          borderRadius: 4,
        },
        // rail: {
        //   height: 20,
        //   borderRadius: 4,
        // },
  });
  ;
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 10,
      label: '10',
    },
  ];

function RangeSlider() {
    const classes = useStyles();


    function valuetext(value) {
        return `${value}`;
      }
      
  return (

    <div className='Sliderdiv'>
        <h2 className='secondaryh2'>Rate Us</h2>
      <Slider className={classes.root}
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        valueLabelDisplay="on"
        step={1}
        min={0}
        max={10}
        marks={marks}
      />
    </div>
  );
}

export default RangeSlider;
