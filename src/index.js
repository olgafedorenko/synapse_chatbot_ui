import anchorButton from './components/buttonRelated/AnchorButton'
import btnGroup from './components/buttonRelated/ButtonGroup';
import button from './components/buttonRelated/Button';
import progressButton from './components/buttonRelated/ProgressButton';
import closeBtn from './components/buttonRelated/CloseButton';
import radioButton from './components/buttonRelated/RadioButton';

import modal from './components/modalRelated/Modal';
import * as svgIcons from './components/SvgIcons';
import table from './components/Table';

import textBubble from  './components/Box/TextBubble';
import loadingBubble from './components/Box/LoadingBubble';

import FormLabel from './components/Label/Label';
import FormErrorMessage from './components/ErrorMessage/ErrorMessage';

import FormInput from './components/Input/Input';
import inputSearch from './components/Input/InputSearch';
import inputGeneral from './components/Input/InputGeneral';
import FormCheckboxGroup from './components/CheckboxGroup/CheckboxGroup';
import FormRadioGroup from './components/RadioGroup/RadioGroup';

import dropup from './components/Dropdown/Dropup';

import Colors from './colors';

import header from './components/Header/header';

export const colors = Colors;

// button related
export const AnchorButton = anchorButton;
export const Button = button;
export const ButtonGroup = btnGroup;
export const CloseButton = closeBtn;
export const ProgressButton = progressButton;
export const RadioButton = radioButton;

export const Modal = modal;
export const SvgIcons = svgIcons;
export const Table = table;

export const Label = FormLabel;
export const ErrorMessage = FormErrorMessage;

export const Input = FormInput;
export const CheckboxGroup = FormCheckboxGroup;
export const InputGeneral = inputGeneral;
export const InputSearch = inputSearch;
export const RadioGroup = FormRadioGroup;

export const LoadingBubble = loadingBubble;
export const TextBubble = textBubble;

export const Dropup = dropup;

export const Header = header;
