import React, { Component } from "react";
import validate from "./validate";

export const createForm = WrappedComponent =>
    class extends Component {
        state = { fields: {} };

        constructor(props) {
            super(props);
            this.instances = {};
        }

        init = instance => {
            if (!instance) {
                return;
            }
            const { fieldName, defaultValue } = instance.props;
            if (fieldName) {
                this.setFieldValue(fieldName, defaultValue);
                this.instances[fieldName] = instance;
            }
        };

        getFieldValue = fieldName => this.state.fields[fieldName];

        setFieldValue = (fieldName, value, callback) => {
            this.setState(state => {
                state.fields[fieldName] = value;
                return state;
            }, callback);
        };

        validateField = fieldName => {
            const instance = this.instances[fieldName];
            if (instance && instance.validate) {
                instance.validate();
            }
        };

        validateFields = callback => {
            let valid = true;
            let count = 0;
            let length = Object.keys(this.instances).length;
            let err;

            for (const key in this.instances) {
                if (this.instances.hasOwnProperty(key)) {
                    const instance = this.instances[key];
                    const { errorMessage } = instance.state;
                    if (errorMessage) {
                        if (!err) {
                            err = {};
                        }
                        count++;
                        err[key] = errorMessage;
                        if (
                            typeof callback === "function" &&
                            count === length
                        ) {
                            callback(err, this.state.fields);
                        }
                    } else {
                        if (instance.validate) {
                            instance.validate((result, message) => {
                                count++;
                                if (!result) {
                                    if (!err) {
                                        err = {};
                                    }
                                    err[key] = message;
                                }

                                if (
                                    typeof callback === "function" &&
                                    count === length
                                ) {
                                    callback(err, this.state.fields);
                                }
                            });
                        }
                    }
                }
            }
        };

        render() {
            const props = {
                ...this.props,
                form: {
                    init: this.init,
                    getFieldValue: this.getFieldValue,
                    setFieldValue: this.setFieldValue,
                    validateField: this.validateField,
                    validateFields: this.validateFields
                }
            };

            return (
                <WrappedComponent
                    {...props}
                    ref={ref => (this.instanceComponent = ref)}
                />
            );
        }
    };