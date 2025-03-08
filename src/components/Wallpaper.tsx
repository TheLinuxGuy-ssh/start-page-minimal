import { WallpaperData } from "../assets/config.ts";

const Wallpaper = () => {
    return (
        <div className="wallpaper">
            <img className={(WallpaperData.animation ? "animated" : "")} src={WallpaperData.url} />
        </div>
    )
}

export default Wallpaper;