import React, {FC, ComponentProps, useState, ChangeEvent} from 'react';
import {Form, Input, Select, Button} from 'antd';
import {RawIndexMap} from "source-map"

type Currency = 'rmb' | 'dollar'

interface PriceValue {
    number?: number;
    currency?: Currency;
}

type PriceChange = (value: PriceValue) => void;

interface PriceInputProps {
    value?: PriceValue;
    onChange?: PriceChange;
}

const PriceInput: FC<PriceInputProps> = ({value = {}, onChange}) => {
    console.log(value);
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState<Currency>('rmb');
    const triggerChange = (changedValue:any) => {
        if (onChange)
            onChange({number, currency, ...value, ...changedValue})
    }

    const onNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newNumber = parseInt(event.target.value || '0', 10);
        if (Number.isNaN(newNumber))
            return;
        if (!('number' in value)) {
            setNumber(newNumber);
        }
        triggerChange({number: newNumber})
    }

    const onCurrencyChange = (newCurrency:Currency) => {
        if (!('currency' in value))
            setCurrency(newCurrency);

        triggerChange({currency:newCurrency});
    }

    return (
        <span>
          <Input type="text" value={value.number || number} onChange={onNumberChange} style={{width: 100}}/>
          <Select value={value.currency || currency}
                  onChange={onCurrencyChange} style={{width:80,margin:'0 8px'}} >
              <Select.Option value="rmb">RMB</Select.Option>
              <Select.Option value="dollar">Dollar</Select.Option>
          </Select>
      </span>
    );
}

const Comp: FC<ComponentProps<any>> = (props) => {
    const onFinish = values => {
        console.log('Received values from form: ', values);
    }

    const checkPrice = (rule,value)=>{
        if (value.number > 0) {
            return Promise.resolve();
        }
        return Promise.reject('Price must be greater than zero!');
    }

    return (
        <div>
            <Form name="customized_form_controls"
                  layout="inline"
                  onFinish={onFinish}
                  initialValues={{
                      price:{
                          number: 0,
                          currency: 'rmb',
                      },
                  }}
                  >
                <Form.Item name="price" label="Price" rules={[{validator: checkPrice}]}>
                    <PriceInput/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default Comp;