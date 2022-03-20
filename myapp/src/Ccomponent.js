import React from 'react';
class Ccomponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            fullname:'',
            desc:'',
            country:'',
            IsNative:false,
            gender:''
        }
    }
    handleChange(event)
    {
        const {name,value,type,checked}=event.target;
        const val=type==='checkbox' ? checked : value;
        this.setState({
            [name]:val
        })
        console.log(this.state)
        // if(event.target.name=='fullname')
        //     this.setState({fullname:event.target.value})
        // else if(event.target.name=='desc')
        //     this.setState({desc:event.target.value})
    }
    render()
    {
        return<>
            <form>
                <input type="text" value={this.state.fullname} name="fullname" onChange={this.handleChange.bind(this)} />
                <br />
                <h3>{this.state.fullname}</h3>
                <br></br>
                <textarea name="desc" value={this.state.desc} onChange={this.handleChange.bind(this)} ></textarea>
                <h3>{this.state.desc}</h3>
                <select name='country' multiple={true} value={['Pak','ind']} onChange={this.handleChange.bind(this)}>
                    <option value="Pak">Pakistan</option>
                    <option value="ind">India</option>
                    <option value="can">Canda</option>
                </select>
                <h4>{this.state.country }</h4>
                <input type="checkbox" name="IsNative" checked={this.state.IsNative} onChange={this.handleChange.bind(this)}></input>
                <label>
                <input type="radio" name="gender" value="male" checked={this.state.gender=='male'} onChange={this.handleChange.bind(this)} />
                Male</label>
                <label>
                <input type="radio" name="gender" value="female" checked={this.state.gender=='female'} onChange={this.handleChange.bind(this)} />Female</label>

                <h5>Hello {this.state.fullname}, your gender is {this.state.gender}</h5>
            </form>
        </>
    }
}
export default Ccomponent;