import { WallpaperData } from "../assets/config";

const Wallpaper = () => {
    return (
        <div className="wallpaper">
            <img className={(WallpaperData.animation && "animated")} src={WallpaperData.url} />
        </div>
    )
}

export default Wallpaper;