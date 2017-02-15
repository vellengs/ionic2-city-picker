import { AfterContentInit, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PickerController, Form, Item, PickerCmp, PickerColumnCmp } from 'ionic-angular';
import { CityPickerColumn } from './city-picker.model';
export declare const CITY_PICKER_VALUE_ACCESSOR: any;
export declare class CityPicker implements AfterContentInit, ControlValueAccessor, OnDestroy {
    private _form;
    private _item;
    private _pickerCtrl;
    _disabled: any;
    _labelId: string;
    _text: string;
    _fn: Function;
    _isOpen: boolean;
    _value: any;
    _pickerCmp: PickerCmp;
    _pickerColumnCmps: PickerColumnCmp[];
    _provinceCol: number;
    _cityCol: number;
    _regionCol: number;
    id: string;
    cancelText: string;
    doneText: string;
    citiesData: CityPickerColumn[];
    separator: string;
    ionChange: EventEmitter<any>;
    ionCancel: EventEmitter<any>;
    constructor(_form: Form, _item: Item, _pickerCtrl: PickerController);
    _click(ev: UIEvent): void;
    _keyup(): void;
    open(): void;
    generate(picker: any): void;
    validate(picker: any): void;
    divyColumns(picker: any): void;
    setValue(newData: any): void;
    getValue(): string;
    checkHasValue(inputValue: any): void;
    updateText(): void;
    disabled: boolean;
    writeValue(val: any): void;
    ngAfterContentInit(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
    onChange(val: any): void;
    onTouched(): void;
    ngOnDestroy(): void;
    getString(newData: any): string;
}
