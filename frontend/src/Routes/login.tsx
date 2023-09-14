import { Button, Checkbox, Input } from "@material-tailwind/react";

export default function Login() {
  return (
    <div>
      <div className="grid grid-cols-3 h-screen">
        <div className="font-titles col-span-2 bg-details-light flex justify-center items-center">
          <div className="font-titles">
            <p className="text-6xl text-text">
              ¡<span className="text-9xl text-details">Bienvenido</span>
            </p>
            <p className="text-7xl text-text pl-32">
              de vuelta<span className="text-6xl">!</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center content-between">
            <form className="w-80">
              <div className="pb-12">
                <Input
                  color="black"
                  variant="standard"
                  label="Usuario"
                  crossOrigin={undefined}
                />
              </div>
              <div className="pb-6">
                <Input
                  color="black"
                  variant="standard"
                  label="Contraseña"
                  type="password"
                  crossOrigin={undefined}
                />
              </div>

              <div className="pb-14">
                <Checkbox
                  className="font-normal text-gray-500"
                  label="Recordarme por 30 Días"
                  crossOrigin={undefined}
                />
              </div>

              <div className="pb-14">
                <Button className="font-normal" color="purple" fullWidth>
                  Iniciar Sesión
                </Button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
