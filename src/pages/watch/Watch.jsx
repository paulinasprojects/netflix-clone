import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://r5---sn-nv47lnlz.googlevideo.com/videoplayback?expire=1637342949&ei=hYqXYcC3FfaJ6dsPs5KluAE&ip=46.10.15.215&id=o-AGG7NxxGXuOHvVvexLDpTs6kTTziZVqLIh7IxOr84rhZ&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=145.008&lmt=1607152055364115&fexp=24001373,24007246&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgXF5W39ml6uRxEmynTKxQ0H2Coyec5qmM-DRmimZlk_gCIQCSPryJylKcN3mjaoHhAPKhZhlB256RwP6zLnji0FMhtw%3D%3D&redirect_counter=1&cm2rm=sn-8p85jvh-nv4z76&req_id=3d4f2cd70687a3ee&cms_redirect=yes&mh=gc&mm=29&mn=sn-nv47lnlz&ms=rdu&mt=1637321345&mv=m&mvi=5&pl=20&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgNyePW89KY5_AmhTqlk0nopaAXEgKgAkp91VOK10ovswCIAqumuACKz3r0NzSLWu9GmcF4p3Aa4XKk-gT8pOAVauT"
            />
        </div>
    )
}
