import { AbstractControl } from "@angular/forms";

export function phoneValidator(control: AbstractControl) {
    if (control && control.value !== null || control.value !== undefined) {
        const regex = new RegExp('^\d{10}$');

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }

    }
    return null;

}


export function passValidator(control: AbstractControl){
    if(control && (control.value ! == null||control.value !==undefined)){
        const cnfpassValue=control.value;
        const passControl=control.root.get('password');
        if(passControl){
            const passValue=passControl.value;
            if(passValue !==cnfpassValue){
                return {
                    isError:true
                };
            }
        }
    }

    return null;
}