#pragma once

#include "App.xaml.g.h"



namespace winrt::rmdesktop::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
    };
} // namespace winrt::rmdesktop::implementation


