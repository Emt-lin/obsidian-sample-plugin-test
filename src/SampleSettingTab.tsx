import { App, PluginSettingTab, Setting } from 'obsidian'
import MyPlugin from '../main'
import { Input, NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'
import React from "react";

export class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
		containerEl.style.userSelect = "text";
		const div = containerEl.createDiv("div");
		const sections = createRoot(div);

		sections.render(
			<NextUIProvider>
				<div>
					<div className={'pt-10'}>
						<Input
							isRequired
							type={'text'}
							label={'License Key'}
							placeholder={'Enter your Copilot Plus license key'}
							labelPlacement={'outside'}
							variant={'bordered'}
							color={'secondary'}
							className="max-w-xs border-0"
						/>
					</div>
				</div>
			</NextUIProvider>
		);

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value
					await this.plugin.saveSettings();
				}));
	}
}
